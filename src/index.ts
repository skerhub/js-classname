interface objParams {
    [key: string]: boolean
  }
  type classParams = string[] | string | objParams 
  
  type funcParams = classParams extends null|undefined ? never : classParams
  
  export const typeOfVar = (obj: unknown): string => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  
  /**@info className组合函数 */
  const classname = (...rest: funcParams[]) => {
    const args = Array.from(rest)
    const params: objParams = {}
    args.forEach((item: funcParams) => {
      const argType = typeOfVar(item)
      switch (argType) {
        case 'string':
          !params.hasOwnProperty(item as string)&&(params[item as string] = true)
          break
        case 'array':
          (item as []).forEach((child: unknown) => {
            if (typeOfVar(child) == 'string') {
              !params.hasOwnProperty(child as string)&&(params[child as string] = true)
            }
          })
          break
        case 'object':
          Object.keys(item).forEach((objItem: string) => {
              const objValue = (item as unknown as objParams)[objItem]
              if (typeOfVar(objValue) == 'boolean') {
                  const hasContain = params.hasOwnProperty(objItem)
                  if(!hasContain && objValue){
                      params[objItem] = true
                  }
                  if(hasContain && !objValue){
                      delete params[objItem]
                  }
              }
          })
          break
        default:
          // console.log('Invalid parameter')
      }
    })
  
    return Object.keys(params).join(' ')
  }
  
  export default classname