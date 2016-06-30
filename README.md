# JSPatchDemo

使用简介：
JSPatch 本身就是十分轻量级的一套框架，使用起来也十分方便，只需在 APPDelegate.m 中引入所需文件，执行三行代码即可：
[JPEngine startEngine];
NSString *sourcePath = [[NSBundle mainBundle] pathForResource:@"demo" ofType:@"js"];
[JPEngine evaluateScriptWithPath:sourcePath];
需要注意的是，.js 文件中的内容无比要正确，对于不熟悉 js 的同学可以借助 JSPatchConvertor 来将 OC 代码转换成 js 格式。

简单理解：
.js 文件就相当于是给已有类所创建的分类，程序在执行时会优先执行.js 文件中所定义的方法。
可在.js 文件中为原生类新建任何类，来实现新增的功能。

基础原理：

能做到通过 JS 调用和改写 OC 方法最根本的原因是 Objective-C 是动态语言，OC 上所有方法的调用 / 类的生成都通过 Objective-C Runtime 在运行时进行，我们可以通过类名 / 方法名反射得到相应的类和方法：

Class class = NSClassFromString("UIViewController");
id viewController = [[class alloc] init];
SEL selector = NSSelectorFromString("viewDidLoad");
[viewController performSelector:selector];
也可以替换某个类的方法为新的实现：

static void newViewDidLoad(id slf, SEL sel) {}
class_replaceMethod(class, selector, newViewDidLoad, @"");
还可以新注册一个类，为类添加方法：

Class cls = objc_allocateClassPair(superCls, "JPObject", 0);
objc_registerClassPair(cls);
class_addMethod(cls, selector, implement, typedesc);
