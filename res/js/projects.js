let projects_list = document.getElementById("full-project-list");
const source = $("#projects-template")[0].innerHTML;
const template = Handlebars.compile(source);
$("#full-project-list").append(template(projects));