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
                foreach ($plugin['css'] as $v) {
                    $this->css[] = $v;
                }
            }
            if (isset($plugin['js'])) {
                foreach ($plugin['js'] as $v) {
                    $this->js[] = $v;
                }
            }
        }

        return $this;
    }
}