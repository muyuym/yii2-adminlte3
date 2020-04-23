hail812/yii2-adminlte3
======================
adminlte3 for yii2

<img width="1440" alt="Screen Shot 2020-04-23 at 11 56 54 AM" src="https://user-images.githubusercontent.com/3158261/80057627-949b2300-8559-11ea-80ca-bff1128b0064.png">

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist hail812/yii2-adminlte3 "*"
```

or add

```
"hail812/yii2-adminlte3": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= \hail812\adminlte3\widgets\Alert::widget([
    'type' => 'success',
    'body' => '<h3>Congratulations!</h3>'
]) ?>
```