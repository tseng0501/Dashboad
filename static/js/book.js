$(function(){
    $("#chart-bolt").dxChart({
        palette: "Violet",
        dataSource: dataSource,
        size: {
            height: 200,
        },
        commonSeriesSettings: {
            argumentField: "day",
            type: "line",
            point: {
                visible: false
            }
        },
        argumentAxis: {
            valueMarginsEnabled: false, 
            breakStyle:{
                color:"#1d2024",
                width: 10
            },
            
        },
        series: [
            { valueField: "hydro",color: '#f2921b', name: "Hydro" },
        ],
        legend: {
            visible: false
        },
        // tooltip: {
        //     enabled: false
        // }
    }).dxChart("instance");
});

$(function(){
    $("#chart-water").dxChart({
        palette: "Violet",
        dataSource: dataSource,
        size: {
            height: 200,
        },
        commonSeriesSettings: {
            argumentField: "day",
            point: {
                visible: false
            }
        },
        argumentAxis: {
            valueMarginsEnabled: false, 
            discreteAxisDivisionMode: "crossLabels",
        },
        series: [
            { valueField: "water",color: '#4a90e2', name: "Hydro-electric"},
        ],
        legend: {
            visible: false
        },
        tooltip: {
            enabled: false
        }
    }).dxChart("instance");
});
$(function(){
    $("#chart-wind").dxChart({
        palette: "Violet",
        dataSource: dataSource,
        size: {
            height: 200,
        },
        commonSeriesSettings: {
            argumentField: "day",
            point: {
                visible: false
            }
        },
        argumentAxis: {
            valueMarginsEnabled: false, 
            discreteAxisDivisionMode: "crossLabels",
        },
        series: [
            { valueField: "hydro",color: '#838383', name: "Hydro-electric" },
        ],
        legend: {
            visible: false
        },
        tooltip: {
            enabled: false
        }
    }).dxChart("instance");
});
$(function(){
    $("#chart-feather").dxChart({
        palette: "Violet",
        dataSource: dataSource,
        size: {
            height: 200,
        },
        commonSeriesSettings: {
            argumentField: "day",
            point: {
                visible: false
            }
        },
        argumentAxis: {
            valueMarginsEnabled: false, 
            discreteAxisDivisionMode: "crossLabels",
        },
        series: [
            { valueField: "feather",color: '#81cd32', name: "Hydro-electric"},
        ],
        legend: {
            visible: false
        },
        tooltip: {
            enabled: false
        }
    }).dxChart("instance");
});
$(function(){
    $("#chart-fire").dxChart({
        palette: "Violet",
        dataSource: dataSource,
        size: {
            height: 200,
        },
        commonSeriesSettings: {
            argumentField: "day",
            point: {
                visible: false
            }
        },
        argumentAxis: {
            valueMarginsEnabled: false, 
            discreteAxisDivisionMode: "crossLabels",
        },
        series: [
            { valueField: "fire",color:"#c61e0e", name: "Hydro-electric"},
        ],
        legend: {
            visible: false
        },
        tooltip: {
            enabled: false
        }
    }).dxChart("instance");
});


var dataSource = [{
    day: 1,
    hydro: 59.8,
    water:20,
    fire:34,
    feather:52
}, {
    day: 2,
    hydro: 64.2,
    water:41,
    fire:45,
    feather:19
}, {
    day: 3,
    hydro: 20.5,
    water:40,
    fire:60,
    feather:52
}, {
    day: 4,
    hydro: 30.4,
    water:19,
    fire:18,
    feather:22
}, {
    day: 5,
    hydro: 27,
    water:26,
    fire:30,
    feather:12
}];
