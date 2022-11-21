function change (para, toc) {
    let test = document.getElementById(para);
    test.innerText = toc;
}

change('p1', 'Ma vie');
change('p2', 'Mon coeur');
change('p3', 'Mon chien');
change('p4', 'Mon chat');
change('p5', 'Mon jardin');