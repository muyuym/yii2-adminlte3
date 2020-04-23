hail812/yii2-adminlte3
======================
adminlte3 for yii2

![home](https://user-images.githubusercontent.com/3158261/80058324-8d751480-855b-11ea-87f5-3d682f787210.png)

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