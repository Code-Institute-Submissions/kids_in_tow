$(document).ready(function () {

    function dropdownContainers() {
        $(".tab").click(function () {
            let currentTabId = $(this).attr("id");
            let container = $(".tab-container");
            $(container).not("." + currentTabId).hide();
            $("." + currentTabId).toggle();
        })
        $(".tab-container i").click(function () {
            let currentContainer = $(this).parent().attr("class").split(' ')[0];
            let container = $(".tab-container");
            $("." + currentContainer).hide();
        })
    }
    dropdownContainers();

    function modalSlideshow() {
        $('.modal').on('shown.bs.modal', function (event) {
            var modal = $(this)
            let images = Array.from(modal.find('.modal-image').children("img"));
            $(images).css("display", "none");
            $(images[0]).css("display", "block");

            let nextButton = $(".next");
            let prevButton = $(".prev");
            let index = 1;

            $(nextButton).on('click', function () {
                for (i = 0; i < images.length; i++) {
                    $(images[i]).css("display", "none");
                }
                index++;
                if (index > images.length - 1) {
                    $(images[images.length - 1]).css("display", "block");
                    index = 0;
                    return false;
                }
                $(images[index - 1]).css("display", "block");
            })

            $(prevButton).on('click', function () {
                for (i = 0; i < images.length; i++) {
                    $(images[i]).css("display", "none");
                }
                index--;
                console.log(index);
                if (index < 1) {
                    $(images[images.length + 1]).css("display", "block");
                    index = images.length
                }
                $(images[index - 1]).css("display", "block");
            })
        })
    }
    modalSlideshow();

    function selectFilters() {

        let button = $(".activity-btn"); // filter buttons

        button.on('click', function () {
            $(this).toggleClass('highlight') //switch highlight class on and off clicked button
            let selected = $(".highlight") // all buttons highlighted
            let filters = [] //initialise filters variable
            // on click of apply filters button

            $(selected).each(function () {
                let highlightedIds = $(this).attr('id'); //gets id of highlighted button
                filters.push(highlightedIds);
                console.log(highlightedIds);
            });

            console.log(filters);
            console.log(filters.toString());

            let applyButton = $(".apply-filters"); // apply filters button
            $(applyButton).on('click', function () {
                applyFilters(filters);
            })

            let clearButton = $(".clear-filters"); // clear filters button
            $(clearButton).on('click', function () {
                clearFilters(filters);
            })
        })
    }

    selectFilters();

    function applyFilters(filters) {
        console.log(filters);
        let activity = $(".activity-section")
        for (i = 0; i < filters.length; ++i) { // for each highlighted filter
            console.log(filters[i]);
            for (j = 0; j < activity.length; j++) {
                console.log(filters[i]);
                if ($(activity[j]).hasClass(filters[i])) {
                    // if activity section has a class of one of the highlighted filters
                    console.log(true);
                    console.log(activity[j]);
                    $(activity[j]).show(); // show activity
                } else {
                    console.log(false);
                    $(activity[j]).hide(); // else hide activity
                }
            }
        }
    }

    function clearFilters(filters) {
        console.log(filters);
        let button = $(".activity-btn"); // filter buttons
        let activity = $(".activity-section")
        filters = [];
        console.log(button);
        $(button).removeClass("highlight");
        $(activity).show();
    }
});