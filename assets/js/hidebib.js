function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "publication-type") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function hideallabstracts()
{
    var el = document.getElementsByTagName("span") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "elaboration") {
            var bib = el[i].getElementsByTagName("span") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function toggleDisplay(d,b)
{
	var c=document.getElementById(d);
	if(c.style.display=="block"){
		c.style.display="none";
		/*if(b){
			b.innerHTML="Read more..."
		}*/
	}
	else{c.style.display="block";
		/*if(b){
			b.innerHTML="Fold in..."
		}*/
	}
}