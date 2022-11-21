function generatehtml(data){
    let card = ""



    card = `
    <div class="card">
    <div class="card-header">
      <h2 class="card-heading">${data.manager.name}</h2>
      <h3 class="card-sub">Manager</h3>
    </div>
    <div class="card-body">
      <div>
        <div class="card-row"><b>Id:</b> <span>${data.manager.id}</span></div>
        <div class="card-row"><b>Email:</b> <a href="mailto:${data.manager.email}">${data.manager.email}</a></div>
        <div class="card-row"><b>Office number:</b> <span>${data.manager.officeNumber}</span></div>
      </div>
    </div>
  </div>
    
    `;

    data.team.forEach(function(employee){


        if(employee.role == "Engineer"){
            card += `

            <div class="card">
            <div class="card-header">
              <h2 class="card-heading">${employee.name}</h2>
              <h3 class="card-sub">Engineer</h3>
            </div>
            <div class="card-body">
              <div>
                <div class="card-row"><b>Id:</b> <span>${employee.id}</span></div>
                <div class="card-row"><b>Email:</b> <a href="mailto:${employee.email}">${employee.email}</a></div>
                <div class="card-row"><b>Github:</b> <a target="_blank" href="https://github.com/${employee.github}">${employee.github}</a></div>
              </div>
            </div>
          </div>

             `;
        }
        else {

            card += `

            <div class="card">
            <div class="card-header">
              <h2 class="card-heading">${employee.name}</h2>
              <h3 class="card-sub">Intern</h3>
            </div>
            <div class="card-body">
              <div>
                <div class="card-row"><b>Id:</b> <span>${employee.id}</span></div>
                <div class="card-row"><b>Email:</b> <a href="mailto:${employee.email}">${employee.email}</a></div>
                <div class="card-row"><b>School:</b> <span>${employee.school}</span></div>
              </div>
            </div>
          </div>

             `;

        }

    })

    let template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team</title>
    
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
    
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
    
          header {
            background-color: pink;
            
            margin-bottom: 50px;
            text-align: center;
          }
    
          header .container {
            min-height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
    
          .container {
            width: min(1200px, 90%);
            display: block;
            margin-inline: auto;
          }
    
          .cards {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
          }
    
          .card {
            
            width: calc(33.33% - 20px);
            overflow: hidden;
            border-radius: 4px;
            border: 1px solid #eee;
          }
    
          .card-row {
            padding-top: 10px;
            padding-bottom: 10px;
          }
    
          .card-header {
            background-color: blue;
            padding: 20px;
            color: #fff;
          }
    
          .card-body {
            padding: 20px;
          }
    
          .card-sub {
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="app">
          <header>
            <div class="container">
              <h1>My Team</h1>
            </div>
          </header>
    
          <div class="team-memebers">
            <div class="container">
              <div class="cards">
    
               ${card}
            
    
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `
          return template;
}

export default generatehtml