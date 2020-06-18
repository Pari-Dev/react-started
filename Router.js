export function routeMap (){
  let routeMap = new Map()

  export const paths = Object.freeze({
    root: "",
    profileInfo: '/ProfileInfo',
 
});

  routeMap.set(paths.root,Parent)
  routeMap.set(paths.profileInfo,ProfileInfo)
}