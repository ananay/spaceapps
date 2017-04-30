# -*- coding: utf-8 -*-
# @Author: ananayarora
# @Date:   2017-04-29 23:28:26
# @Last Modified by:   ananayarora
# @Last Modified time: 2017-04-30 00:11:17


import geocoder
import sys

degree = 0.0025
lat = float(sys.argv[1])
lon = float(sys.argv[2])

w, h = 10, 10

arr = [[0 for x in range(w)] for y in range(h)]
fin = [[0 for x in range(w-2)] for y in range(h-2)]

for y in range(-5,5):
	for x in range(-5, 5):
		g = geocoder.elevation([lat + (x * degree) , lon + (y * degree)]).meters
		if (g == None):
			if (x == -5):
				arr[y + 5][x + 5] = arr [y + 4][4]
			else:
				arr[y + 5][x + 5] = arr [y + 5][x + 4]
		else:
			arr[y + 5][x + 5] = g

print arr

for j in range(8):
	for i in range(8):
		fin[j][i] = abs(arr[j+1][i+1] - arr[j][i+1]) + abs(arr[j+1][i+1] - arr[j+1][i+2]) + abs(arr[j+1][i+1] - arr[j+2][i+1]) + abs(arr[j+1][i+1] - arr[j + 1][i])
		fin[j][i] /= 4

print(fin)