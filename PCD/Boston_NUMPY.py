import numpy as np
import json
import matplotlib.pyplot as plt
import pandas as pd
from mpl_toolkits.mplot3d import Axes3D

#读入数据
def load_data():
    datafile=pd.read_csv('..\\boston_housing_data.csv')
    datafile=np.array(datafile)
    # print(datafile)


    feature_names=['CRIM', 'ZN', 'INDUS', 'CHAS', 'NOX', 'RM', 'AGE', 'DIS', 'RAD'
                     , 'TAX', 'PTRATIO', 'B', 'LSTAT', 'MEDV']

    feature_num = len(feature_names)

    #检查
    # first_element=datafile[0]
    # print(first_element)
    # print(first_element.shape)

    # 划分训练集和验证集
    ratio=0.5
    offset=int(datafile.shape[0]*ratio)
    training_data=datafile[:offset]
    # print(training_data.shape)

    #计算训练集的最大值，最小值和平均值
    maxmums,minmums,avgs=training_data.max(axis=0),training_data.min(axis=0),\
                        training_data.sum(axis=0)/training_data.shape[0]
    # print(maxmums,minmums,avgs)

    #归一化
    for i in range(feature_num):
        datafile[:,i]=(datafile[:,i]-avgs[i])/(maxmums[i]-minmums[i])

    # print(datafile)

    #数据划分
    train_data=datafile[:offset]
    test_data=datafile[offset:]
    return train_data,test_data


#设计模型 z=wx+b
class Network():
    def __init__(self,num_of_weights):
        #随机产生w的初始值，但为了保持程序每次运行结果的一致性，此处设置固定的随机数种子
        np.random.seed(0)#设置后np的random模块每次生成的随机数相同
        self.w=np.random.randn(num_of_weights,1)
        self.b=0.

    def forward(self,x):
        z=np.dot(x,self.w)+self.b
        return z

    def lossfunction(self,z,y):
        lossing=z-y
        num_samples=lossing.shape[0]
        cost=lossing*lossing
        cost=np.sum(cost)/num_samples
        return cost

    def gradient(self,x,y):
        z=self.forward(x)
        gradient_w=(z-y)*x
        gradient_w=np.mean(gradient_w,axis=0)
        gradient_w=gradient_w[:,np.newaxis]
        gradient_b=(z-y)
        gradient_b=np.mean(gradient_b)
        return gradient_w,gradient_b

    def update(self,gradient_w,gradient_b,eat=0.01):
        self.w=self.w-eat*gradient_w
        self.b=self.b-eat*gradient_b

    def train(self,x,y,iterations,eta=0.01):
        losses=[]
        for i in range(iterations):
            z=self.forward(x)
            L=self.lossfunction(z,y)
            gradient_w,gradient_b=self.gradient(x,y)
            self.update(gradient_w,gradient_b,eta)
            losses.append(L)
            if (i+1)%10==0:
                print('iter {},loss{}'.format(i,L))
        return losses

#获取数据
training_data,test_data=load_data()
x=training_data[:,:-1]
y=training_data[:,-1:]

#查看数据
# print(y[0])

#初始化网络
net=Network(13)
num_iterations=1000

#启动
losses=net.train(x,y,iterations=num_iterations,eta=0.01)

#画出损失函数
plot_x=np.arange(num_iterations)
plot_y=np.array(losses)
plt.plot(plot_x,plot_y)
plt.show()

