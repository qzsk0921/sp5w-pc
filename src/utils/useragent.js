function isPC (){
    let userAgentInfo = navigator.userAgent.toLowerCase()
    let agents = new Array("android", "iphone", "symbianos", "windows phone", "ipad", "ipod")
    let flag = true
    for (let v = 0; v < agents.length; v++) {
        if (userAgentInfo.indexOf(agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
 }

 export default isPC