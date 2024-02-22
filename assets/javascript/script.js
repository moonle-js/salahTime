const findBtn = document.querySelector('#findCity');
const salahShowTime = document.querySelector('#salahShowSide');
const cityName = document.querySelector('#cityName')




async function getData(city){
    if(city){


        //fething details
        const url = `https://muslimsalat.p.rapidapi.com/${city}.json`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3bac3f8044mshd0e9722441068afp1b54a0jsnf3a95cffb192',
                'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
            }
        };


        try {
            const response = await fetch(url, options);
            const result = await response.json();

            var namazTimes = [result.items[0].fajr, result.items[0].dhuhr, result.items[0].asr, result.items[0].maghrib, result.items[0].isha]



            salahShowTime.innerHTML = `

                <div class="prayTime" id="fajr">
                    <div class="prayInfo">
                        <img src="./assets/images/subh.svg" alt="fajr" title="fajr">
                        <span id="fajrText">Fajr</span>
                    </div>

                    <div id="fajrTime">
                        ${
                            namazTimes[0]
                        }
                    </div>
                </div>

                <div class="prayTime" id="zuhr">
                    <div class="prayInfo">
                        <img src="./assets/images/fajr.svg" alt="zuhr" title="zuhr">
                        <span id="zuhrText">Zuhr</span>
                    </div>

                    <div id="zuhrTime">
                        ${
                            namazTimes[1]
                        }
                    </div>
                </div>

                <div class="prayTime" id="asr">
                    <div class="prayInfo">
                        <img src="./assets/images/asr.svg" alt="asr" title="asr">
                        <span id="asrText">Asr</span>
                    </div>

                    <div id="asrTime">
                        ${
                            namazTimes[2]
                        }
                    </div>
                </div>

                <div class="prayTime" id="magrib">
                    <div class="prayInfo">
                        <img src="./assets/images/magrib.svg" alt="magrib" title="magrib">
                        <span id="magribText">Magrib</span>
                    </div>

                    <div id="magribTime">
                        ${
                            namazTimes[3]
                        }
                    </div>
                </div>

                <div class="prayTime" id="isha">
                    <div class="prayInfo">
                        <img src="./assets/images/isha.svg" alt="isha" title="isha">
                        <span id="ishaText">Isha</span>
                    </div>

                    <div id="ishaTime">
                        ${
                            namazTimes[4]
                        }
                    </div>
                </div>
            
            `


            cityName.value = ""
        } catch (error) {
            console.error(error);
        }
    }
    
}

findBtn.addEventListener('click',async function(){
    getData(cityName.value.trim())
})
document.addEventListener('keyup', async function(e){
    if(e.key == "Enter"){
        getData(cityName.value.trim())
    }
})

document.querySelectorAll("#defaultCities button").forEach(function(item){
    item.addEventListener('click', function(){
        getData(item.id)
    })
})