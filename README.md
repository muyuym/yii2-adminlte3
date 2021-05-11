hail812/yii2-adminlte3
======================
adminlte3 for yii2

![home](https://user-images.githubusercontent.com/3158261/80058324-8d751480-855b-11ea-87f5-3d682f787210.png)

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require "hail812/yii2-adminlte3=~1.1"
```

or add

```
"hail812/yii2-adminlte3": "~1.1"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, you can config the path mappings of the view component:

```php
'components' => [
    'view' => [
         'theme' => [
             'pathMap' => [
                '@app/views' => '@vendor/hail812/yii2-adminlte3/src/views'
             ],
         ],
    ],
],
```

Copy files from @vendor/hail812/yii2-adminlte3/src/views to @app/views, then edit.

simply use:

```php
<?= \hail812\adminlte\widgets\Alert::widget([
    'type' => 'success',
    'body' => '<h3>Congratulations!</h3>'
]) ?>
```
more for [widgets](https://github.com/hail812/yii2-adminlte-widgets)

AdminLTE Plugins
----------------
AdminLTE Plugins are not included in AdminLteAsset, if you want to use any of them you can add it dynamically with PluginAsset.
For example:

```php
/* @var $this \yii\web\View */

\hail812\adminlte3\assets\PluginAsset::register($this)->add('sweetalert2');

// or
\hail812\adminlte3\assets\PluginAsset::register($this)->add(['sweetalert2', 'toastr']);
```

before this, maybe you should edit params.php:

```php
return [
    'adminEmail' => 'admin@example.com',
    'hail812/yii2-adminlte3' => [
        'pluginMap' => [
            'sweetalert2' => [
                'css' => 'sweetalert2-theme-bootstrap-4/bootstrap-4.min.css',
                'js' => 'sweetalert2/sweetalert2.min.js'
            ],
            'toastr' => [
                'css' => ['toastr/toastr.min.css'],
                'js' => ['toastr/toastr.min.js']
            ],
        ]
    ]
];
```

or

```php
/* @var $this \yii\web\View */

$bundle = \hail812\adminlte3\assets\PluginAsset::register($this);
$bundle->css[] = 'sweetalert2-theme-bootstrap-4/bootstrap-4.min.css';
$bundle->js[] = 'sweetalert2/sweetalert2.min.js';
```

Gii
---
Now you need to tell Gii about out template. The setting is made in the config file.

```php
// config/main-local.php for advanced app
if (!YII_ENV_TEST) {
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        'generators' => [ // here
            'crud' => [ // generator name
                'class' => 'yii\gii\generators\crud\Generator', // generator class
                'templates' => [ // setting for our templates
                    'yii2-adminlte3' => '@vendor/hail812/yii2-adminlte3/src/gii/generators/crud/default' // template name => path to template
                ]
            ]
        ]
    ];
}
```

Open the CRUD generator and you will see that in the field `Code Template` of form appeared own template.