(function() {
    var beforePrint = function() {
        console.log('Functionality to run before printing.');
    };
    var afterPrint = function() {
        console.log('Functionality to run after printing');
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
}());

function printAsPDF() {

    // Closes Accordion element
    //var activeElements = document.getElementsByClassName("active");
    //Array.prototype.forEach.call(activeElements,function(element) {
    //    element.click();
    //});

    // Opens every Accordion Element
    var accordionElements = document.getElementsByClassName("accordion");
    Array.prototype.forEach.call(accordionElements,function(element) {
        if (!element.classList.contains("active")){
            element.click();
        }
    });

    // Print Document
    window.print();

    // Closes every Accoridion Element
    Array.prototype.forEach.call(accordionElements,function(element) {
            element.click();
    });

    return false;
}

