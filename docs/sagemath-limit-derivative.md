# حد و مشتق

نحوه استفاده از Sage  برای حدگیری و مشتق گیری در این صفحه توضیح داده شده است. در صورت عدم آشنایی با نحوه استفاده از توابع در Sage ابتدا [صفحه کار با توابع](sagemath-functions.md) را مطالعه کنید.

## حدگیری
حدگیری در Sage با استفاده از تابع `limit` صورت می گیرد.استفاده از این تابع به شکل زیر است:

```python
f(x) = x*sin(1/x)
limit(f(x), x=0)
# output : 0
g(x) = (1 + sin(x))^(1/x)
limit(g(x), x=0)
# output : e
```

این تابع به صورت پیشفرض حدود را از چپ و راست محاسبه می کند اما می توان با پارامتر `dir` جهت نزدیک شدن به نقطه موردنظر را تعیین کرد.
```python
limit(sgn(x), x=0, dir='+')
# output : 1
limit(sgn(x), x=0, dir='-')
# output : -1
limit(sgn(x), x=0)
# output : und
```
برای بررسی حد در بی نهایت می توان از `oo` به عنوان نماد بی نهایت استفاده کرد.
```python
limit(1/x, x=oo)
# output : 0
limit(sin(x), x=oo)
# output : ind
```
## مشتق گیری
برای مشتق گیری از عبارات در Sage میتوان از تابع `diff` استفاده کرد.ورودی ها به ترتیب تابع موردنظر، متغیری که نسبت به آن مشتق میگیریم و مرتبه ی مشتق هستند.
یک مثال ساده استفاده از این تابع اینگونه است
```python
f(x) = x*sin(cos(x))
diff(f, x)
# output : x |--> -x*cos(cos(x))*sin(x) + sin(cos(x))
```
و برای مشتقات مراتب بالاتر داریم:
```python
f(x, y) = x^3 + 2*x*y - sin(x*y)
diff(f, x, 2)
# output : (x, y) |--> y^2*sin(x*y) + 6*x
```
در کد بالا برنامه دوبار از تابع موردنظر نسبت به `x` مشتق گیری می کند.
و یا کد زیر  ابتدا از تابع نسبت به `x` و سپس دو بار نسبت به `y` مشتق گیری می کند.
```python
f(x, y) = x^3 + 2*x*y - sin(x*y)
diff(f, x, y, y)
#output : (x, y) |--> x^2*y*cos(x*y) + 2*x*sin(x*y)
```
