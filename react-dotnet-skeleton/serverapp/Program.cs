var builder = WebApplication.CreateBuilder(args);

string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



builder.Services.AddCors(o => o.AddPolicy(MyAllowSpecificOrigins, builder =>
{
    builder.AllowAnyOrigin()    // Allow CORS Recest from all Origin
            .AllowAnyMethod()    // Allow All Http method
            .AllowAnyHeader();   // Allow All request header
}));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(MyAllowSpecificOrigins);   // Add For CORS

app.MapControllers();

app.Run();
