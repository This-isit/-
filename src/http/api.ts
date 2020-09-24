import service from './index';

export default {
    getOneCone({ subject, model, testType }: { subject: string; model: string; testType: string }) {
        return service.get(`/query?subject=${subject}&model=${model}&testType=${testType}&key=f9d1022a6c59a0ecf19d02f92d3efd13`)
    },
    getIndex(){
        return service.get(`/scenics/banners`)
    },
    getpost(){
        return service.get(`/posts/cities`)
    },
    getposts({ city }: {city: string |number}) {
        return service.get(`/posts?city=${city}`)
        
    },
    getxiangqing({ id }: {id: string |number}) {
        return service.get(`/posts?id=${id}`)
    },
    getair(){
        return service.get(`/airs/sale`)
    },
    gatairs({ departCity, departCode, destCity, destCode, departDate }: 
        {departCity: string |number;departCode: string |number;
            destCity: string |number;destCode: string |number;
            departDate: string |number;}) {
        return service.get(`/airs?departCity=${departCity}&departCode=${departCode}
        &destCity=${destCity}&destCode=${destCode}&departDate=${departDate}`)
    },
    //实时机票
    getjp({ name }: {name: string}) {
        return service.get(`/airs/city?name=${name}`)
    },
      //实时机票
      getjps({ name }: {name: string}) {
        return service.get(`/airs/city?name=${name}`)
    },
    //酒店
  //7.获取城市
  getcities({ name }: { name: string }) {
    return service.get(`/cities?name=${name}`)
},
//8.获取酒店
// gethotel({ city, id, price_in, scenic, name_contains, hotellevel, hoteltype, hotelbrand, hotelasset, enterTime, person, _sort, _limit, _start }: {
//     city: number; id?: number | undefined; scenic?: number | undefined; name_contains?: string | undefined; price_in?: number | undefined; hotellevel?: number | undefined; hoteltype?: number | undefined; hotelbrand?: number | undefined; hotelasset?: number | undefined; enterTime?: any; person?: number | undefined; _sort?: string | undefined; _limit?: number | undefined; _start?: number | undefined
// }) {
//     return service.get(`/hotels?city=${city}&id=${id}&price_in=${price_in}&scenic=${scenic}&name_contains=${name_contains}&hotellevel=${hotellevel}&hoteltype=${hoteltype}&hotelbrand=${hotelbrand}&hotelasset=${hotelasset}&enterTime=${enterTime}&person=${person}&_sort=${_sort}&_limit=${_limit}&_start=${_start}`)
// },
//9.获取酒店
getHotel({ city }: { city: number }) {
    return service.get(`/hotels?city=${city}`)
},
//10.获取酒店详情
getoptions() {
    return service.get('hotels/options')
},

    

}
