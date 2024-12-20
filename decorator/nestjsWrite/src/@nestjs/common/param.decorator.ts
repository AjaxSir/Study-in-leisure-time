import 'reflect-metadata'
const createParamDecorator = (name: string) => {
    return () => (target: any, propertyKey: string, paramIndex:number) => {
        // 先获取方法名元数据
        // 如果没有，就创建一个空数组
        // 如果有，就在数组中添加新的参数信息
        // 最后，在方法元数据中存储这个数组，方便后续使用
        // 注意，paramIndex是从0开始的，所以需要加1
        // 这样做的目的是保证在Controller中可以直接通过参数名来获取参数值
        // 参数装饰器从右到左 1 -》 0
        const exitingParam = Reflect.getMetadata('params',target, propertyKey) || []
        // exitingParam.push({ name, paramIndex }) 这样处理不了没有带装饰器的参数
        exitingParam[paramIndex] = { name, paramIndex }
        console.log(exitingParam, 'exitingParam')
        Reflect.defineMetadata('params',exitingParam, target, propertyKey)
    }
}

export const Request = createParamDecorator('Request');
export const Req = createParamDecorator('Req');