var data = require("./data");
var topic = [];
var sector = [];
var region = [];
var pestle = [];
var calc = [];

getAllData = function(){

    intensity = []
    topicFlag = 0;
    sectorFlag = 0;
    regionFlag = 0;
    pestleFlag = 0;
    intense = 0;
    data.forEach((obj)=>{
        topic.forEach((top)=>{
           if(top == obj.topic || obj.topic==''){
            topicFlag=1;
           }
        });
        sector.forEach((sec)=>{
            if(sec == obj.sector || obj.sector == '')
            {
                sectorFlag=1;
            }
        });
        region.forEach((reg)=>{
            if(reg == obj.region || obj.region == ''){
                regionFlag = 1;
            }
        });
        pestle.forEach((pes)=>{
            if(pes == obj.pestle || obj.pestle == ''){
                pestleFlag = 1;
            }
        });
        if(topicFlag == 0){
          topic.push(obj.topic);
        }       
        if(sectorFlag == 0){
            sector.push(obj.sector);
        }
        if(regionFlag == 0){
            region.push(obj.region);
        }
        if(pestleFlag == 0){
            pestle.push(obj.pestle);
        }
             topicFlag = 0;
             sectorFlag = 0;
             regionFlag = 0;
             pestleFlag = 0;
             
    });

        return {
            topic : topic,
            sector : sector,
            region : region,
            pestle : pestle
        }
} 


function cal(){
     let intensity=[];
     let relevance=[];
     let likelihood=[];
     topic.forEach((top)=>{
         let obj ={
             topic:top,
             intensity:0,
             relevance:0,
             likelihood:0
         };
         calc.push(obj);
     })
     data.forEach((obj)=>{
         for(let cal of calc){
             if(cal.topic == obj.topic){
                 if(cal.intensity<obj.intensity){
                     cal.intensity=obj.intensity;
                 }
                 if(cal.relevance<obj.relevance){
                     cal.relevance = obj.relevance;
                 }
                 if(cal.likelihood < obj.likelihood){
                     cal.likelihood = obj.likelihood;
                 }
             }
         }
    });

    calc.forEach(cal=>{
        console.log(cal);
        intensity.push(cal.intensity);
        relevance.push(cal.relevance);
        likelihood.push(cal.likelihood);
    });



    return {
        intensity:intensity,
        relevance:relevance,
        likelihood:likelihood
    };    
}

module.exports = {
    getAllData:getAllData,
    cal : cal
};