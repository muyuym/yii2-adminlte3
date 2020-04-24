<?php
namespace hail812\adminlte3\assets;

use yii\web\AssetBundle;

class PluginAsset extends AssetBundle
{
    public $sourcePath = '@vendor/almasaeed2010/adminlte/plugins';

    public $depends = [
        'hail812\adminlte3\assets\AdminLteAsset'
    ];

    public static $pluginMap = [
        'fontawesome' => [
            'css' => 'fontawesome-free/css/all.min.css'
        ],
        'icheck-bootstrap' => [
            'css' => ['icheck-bootstrap/icheck-bootstrap.css']
        ]
    ];

    public function add($pluginName)
    {
        $pluginName = (array) $pluginName;

        foreach ($pluginName as $name) {
            $plugin = self::$pluginMap[$name];
            if (isset($plugin['css'])) {
                foreach ((array) $plugin['css'] as $v) {
                    $this->css[] = $v;
                }
            }
            if (isset($plugin['js'])) {
                foreach ((array) $plugin['js'] as $v) {
                    $this->js[] = $v;
                }
            }
        }

        return $this;
    }
}