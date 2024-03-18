var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAWSLambdaHosting(LambdaEventSource.HttpApi);
var app = builder.Build();

app.MapGet("/cs", () =>
{
  return Results.Json(new { message = "Hello, World! From CSharp" });
});

app.Run();
