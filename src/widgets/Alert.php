<?php
namespace hail812\adminlte3\widgets;

use yii\base\ErrorException;
use yii\bootstrap4\Widget;

/**
 * Class Alert
 * @deprecated  https://packagist.org/packages/hail812/yii2-adminlte-widgets
 * @package hail812\adminlte3\widgets
 */
class Alert extends Widget
{
    public $alertTypes = [
        'danger' => [
            'class' => 'alert-danger',
            'icon' => 'fa-ban'
        ],
        'info' => [
            'class' => 'alert-info',
            'icon' => 'fa-info'
        ],
        'warning' => [
            'class' => 'alert-warning',
            'icon' => 'fa-exclamation-triangle'
        ],
        'success' => [
            'class' => 'alert-success',
            'icon' => 'fa-check'
        ],
        'light' => [
            'class' => 'alert-light',
        ],
        'dark' => [
            'class' => 'alert-dark'
        ]
    ];

    public $type;

    public $title = 'Alert';

    public $icon;

    /**
     * @var string the body content in the alert component.
     */
    public $body;

    /**
     * @var bool whether or not the body has the head
     */
    public $simple = false;

    /**
     * @var array|false the options for rendering the close button tag.
     *
     * The following special options are supported:
     *
     * - tag: string, the tag name of the button. Defaults to 'button'.
     * - label: string, the label of the button. Defaults to '&times;'.
     *
     * The rest of the options will be rendered as the HTML attributes of the button tag.
     */
    public $closeButton = [];

    public function init()
    {
        parent::init();

        if (is_null($this->type)) {
            $this->type = 'info';
        }
        if (!isset($this->alertTypes[$this->type])) {
            throw new ErrorException('unsupported type: '.$this->type);
        }
    }

    public function run()
    {
        $head = '';
        if (!$this->simple) {
            $icon = $this->icon ?? $this->alertTypes[$this->type]['icon'] ?? null;
            $iconHtml = $icon ? '<i class="icon fas '.$icon.'"></i>' : '';
            $head = '<h5>'.$iconHtml.' '.$this->title.'!</h5>';
        }

        echo \yii\bootstrap4\Alert::widget([
            'body' => $head.$this->body,
            'closeButton' => $this->closeButton,
            'options' => [
                'id' => $this->getId().'-'.$this->type,
                'class' => $this->alertTypes[$this->type]['class']
            ]
        ]);
    }
}