using Microsoft.EntityFrameworkCore;
using Piranha;
using Piranha.AttributeBuilder;
using Piranha.AspNetCore.Identity.SQLServer;
using Piranha.Data.EF.SQLServer;
using Piranha.Manager.Editor;
using Piranha.Data.EF.MySql;
using Piranha.AspNetCore.Identity.MySQL;
using SixLabors.ImageSharp;
var builder = WebApplication.CreateBuilder(args);

builder.AddPiranha(options =>
{
    /**
     * This will enable automatic reload of .cshtml
     * without restarting the application. However since
     * this adds a slight overhead it should not be
     * enabled in production.
     */
    options.AddRazorRuntimeCompilation = true;

    options.UseCms();
    options.UseManager();

    options.UseFileStorage(naming: Piranha.Local.FileStorageNaming.UniqueFolderNames);
    options.UseImageSharp();
    options.UseTinyMCE();
    options.UseMemoryCache();

    var connectionString = builder.Configuration.GetConnectionString("piranha");
    options.UseEF<MySqlDb>(db => db.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

    options.UseIdentityWithSeed<IdentityMySQLDb>(db => db.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
    /**
     * Here you can configure the different permissions
     * that you want to use for securing content in the
     * application.
    options.UseSecurity(o =>
    {
        o.UsePermission("WebUser", "Web User");
    });
     */

    /**
     * Here you can specify the login url for the front end
     * application. This does not affect the login url of
     * the manager interface.
    options.LoginUrl = "login";
     */
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UsePiranha(options =>
{
    // Initialize Piranha
    App.Init(options.Api);

    // Build content types
    new ContentTypeBuilder(options.Api)
        .AddAssembly(typeof(Program).Assembly)
        .Build()
        .DeleteOrphans();

    // Configure Tiny MCE
    EditorConfig.FromFile("editorconfig.json");

    options.UseManager();
    options.UseTinyMCE();
    options.UseIdentity();
});
app.UseStatusCodePagesWithRedirects("/pagenotfound");
app.Run();