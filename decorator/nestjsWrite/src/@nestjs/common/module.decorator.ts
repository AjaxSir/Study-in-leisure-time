import 'reflect-metadata'
interface ModuleOptions {
    controllers: Function[]
}
export const Module = (options: ModuleOptions):ClassDecorator => {
    return (target: Function) => {
        // target 是表示一个 AppModule类
        Reflect.defineMetadata('controllers', options.controllers, target)
    }
}