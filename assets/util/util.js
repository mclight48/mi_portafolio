/* MODAL DINÁMICO PROYECTOS */
function proyectDetail(proyectName) {
    const modal = document.getElementById('comunModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBodyInput = modal.querySelector('.modal-body p');
    const modalImage=modal.querySelector('.modal-body img');
    const modalFooter=modal.querySelector('.modal-footer');
    //let json=JSON.parse(projects);
    modalFooter.children.repositorio.target="_blank";
    for (let index = 0; index < projectItem.length; index++) {
        if (proyectName.id == projectItem[index].id){
            modalTitle.textContent = projectItem[index].title;
            modalBodyInput.textContent = projectItem[index].txt;
            modalImage.src=projectItem[index].src;
            modalImage.className="img-fluid pb-2";
            modalFooter.children.repositorio.href=projectItem[index].repo;
            modalFooter.children.web.href=projectItem[index].web;
            break;
        }
    }
}

// /*GENERACION DE PROYECTOS*/
function projects(){
    let elem = document.querySelector('#project');

    for (let index = 0; index < projectItem.length; index++) {
            let clone = elem.cloneNode(true);
            clone.getElementsByClassName("card-img-top")[0].src = projectItem[index].src;
            clone.getElementsByClassName("card-title")[0].textContent = projectItem[index].title;
            clone.getElementsByClassName("card-text")[0].textContent = projectItem[index].shortTxt;
            clone.getElementsByClassName("btn")[0].id = projectItem[index].id;
            clone.classList.remove("d-none");
            elem.after(clone);
    }
}










