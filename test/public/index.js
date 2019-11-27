var app = new Vue({
    el : "#app",
    data : {
        message : "Hello Vue !",
        span_title : "You loaded this page on : "+new Date().toLocaleString(),
        seen : true,
        todos : [
            { text : "Learn Javascript" },
            { text : "Learn Vue" },
            { text : "Built something" }
        ]
    }
});