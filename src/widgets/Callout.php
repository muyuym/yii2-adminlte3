<?php
namespace hail812\adminlte3\widgets;

use yii\base\ErrorException;
use yii\bootstrap4\Widget;
use yii\helpers\Html;

/**
 * @deprecated https://packagist.org/packages/hail812/yii2-adminlte-widgets
 * Class Callout
 * @package hail812\adminlte3\widgets
 * @example
 * <?= Callout::widget(['type'=>'info', 'head'=>'head string', 'body'=>'body string']) ?>
 * Also possible
 * <?php Callout::begin(['type'=>'info', 'head'=>'head string']) ?>
 *      body content
 * <?php Callout::end() ?>
 */
class Callout extends Widget
{
    /**
     * @var array supported type
     */
    public $supportedType = ['danger', 'info', 'warning', 'success'];

    public $type;

    /**
     * @var string
     */
    public $head;

    /**
     * @var string
     */
    public $body;

    /**
     * @inheritdoc
     */
    public $options = [];

    /**
     * @var string $template
     */
    public $template = <<<html
<div {options}>
    <h5>{head}</h5>
    <p>{body}</p>
</div>
html;

    public function init()
    {
        parent::init();

        if (is_null($this->type)) {
            $this->type = 'info';
        }
        if (!in_array($this->type, $this->supportedType)) {
            throw new ErrorException('unsupported type: '.$this->type);
        }

        Html::addCssClass($this->options, 'callout');
        Html::addCssClass($this->options, 'callout-'.$this->type);

        ob_start();
    }

    public function run()
    {
        $content = ob_get_clean();

        return strtr($this->template, [
            '{options}' => Html::renderTagAttributes($this->options),
            '{head}' => $this->head,
            '{body}' => $this->body.$content
        ]);
    }
}