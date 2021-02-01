$(function(){
    var chart = $("#chart").dxChart({
        palette: "Violet",
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: "day",
            point: {
                visible: false
            }
        },
        margin: {
            top:20,
            bottom: 20
        },
        size: {
            height: 650,
        },
        argumentAxis: {
            color: '#3e434e',
            breakStyle:{
                color:"#1d2024",
                width: 10
            },
        },
        tick:{
            color:"#232b35"
        },
        series: [
            { valueField: "hydro",color:"#c61e0e", name: "Hydro-electric" },
            { valueField: "oil",color:"#81cd32", name: "Oil" },
            { valueField: "gas", name: "Natural gas" },
        ],
        minorTick:{
            color: "#1d2024"
        },
        legend: {
            // visible: false,
            verticalAlignment: "bottom",
            horizontalAlignment: "center",
            itemTextPosition: "bottom"
        },
        tooltip: {
            enabled: true
        }
    }).dxChart("instance");
    
});

var dataSource = [{
    day: 1,
    hydro: 59.8,
    oil: 237.6,
    gas: 352,
}, {
    day: 2,
    hydro: 74.2,
    oil: 308.6,
    gas: 235.1,
}, {
    day: 3,
    hydro: 40,
    oil: 128.5,
    gas: 361.8,
}, {
    day: 4,
    hydro: 22.6,
    oil: 241.5,
    gas: 64.9,
}, {
    day: 5,
    hydro: 19,
    oil: 119.3,
    gas: 28.9,
}];

var head_title ;
document.querySelector('.head-tag').innerText="99";