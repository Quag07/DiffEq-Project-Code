import matplotlib.pyplot as plt
import math
import numpy as np
import pandas as pd

pop = 10833472
d = 92
irate = 0.20345
vrate = 0.00325
recrate = 0.14
mort = 0.039924
h=1
ypoints = np.array([])

sus = 8646654/pop
inf = 952/pop
rec = 2169331/pop
dec = 16535/pop
for i in range(int(d)):
    chS = -irate*sus*inf
    chI = irate*sus*inf-recrate*inf-mort*inf
    chR = recrate*inf
    chD = mort*inf
    sus = sus+h*chS
    inf = inf+h*chI
    rec = rec+h*chR
    dec = dec+h*chD
'''print("Susceptible: " + str(int(pop*sus)))
print("Infected: " + str(int(pop*inf)))
print("Recovered: " + str(int(pop*rec)))
print("Deceased: " + str(int(pop*dec)))'''

sus = 8646654/pop
inf = 952/pop
rec = 858309/pop
vac = 1327557/pop
for i in range(int(d)):
    chS = -irate*sus*inf-vrate*sus
    chI = irate*sus*inf-recrate*inf
    chR = recrate*inf
    chV = vrate*sus
    sus = sus+h*chS
    inf = inf+h*chI
    rec = rec+h*chR
    vac = vac+h*chV
'''print('')
print("Susceptible: " + str(int(pop*sus)))
print("Infected: " + str(int(pop*inf)))
print("Recovered: " + str(int(pop*rec)))
print("Vaccinated: " + str(int(pop*vac)))'''

sus = 9488428/pop
inf = 952/pop
vac = 1327557/pop
dec = 16535/pop
for i in range(int(d)):
    chS = -irate*sus*inf-vrate*sus + recrate*inf
    chI = irate*sus*inf-recrate*inf-mort*inf
    chV = vrate*sus
    chD = mort*inf
    ypoints = np.append(ypoints,sus*pop)
    sus = sus+h*chS
    inf = inf+h*chI
    vac = vac+h*chV
    dec = dec+h*chD
'''print('')
print("Susceptible: " + str(int(pop*sus)))
print("Infected: " + str(int(pop*inf)))
print("Vaccinated: " + str(int(pop*vac)))
print("Deceased: " + str(int(pop*dec)))'''

xpoints = np.array([])
for i in range(d):
    xpoints = np.append(xpoints,i)
a = pd.read_excel('C:/Users/bigbe/Downloads/Diffeq Project Data.xlsx')

plt.plot(xpoints,a['S1'])
plt.plot(xpoints,ypoints)
plt.ylim(ymin=0)
plt.xlabel('Days Since 4/1/25')
plt.ylabel('Susceptible')
plt.title('Susceptible Population Over Time')
plt.margins(x=0,y=0)
plt.show()