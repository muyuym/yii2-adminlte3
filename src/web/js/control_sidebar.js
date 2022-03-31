(function ($) {
    let $sidebar = $('.control-sidebar');
    let $container = $('<div />', {
        class: 'p-3 control-sidebar-content'
    });

    $sidebar.append($container);

    // Checkboxes

    $container.append(
        '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
    );

    let $dark_mode_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('dark-mode'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('dark-mode');
        } else {
            $('body').removeClass('dark-mode');
        }
    });
    let $dark_mode_container = $('<div />', {class: 'mb-4'}).append($dark_mode_checkbox).append('<span>Dark Mode</span>');
    $container.append($dark_mode_container);

    // Header Options

    $container.append('<h6>Header Options</h6>');
    let $header_fixed_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('layout-navbar-fixed'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('layout-navbar-fixed');
        } else {
            $('body').removeClass('layout-navbar-fixed');
        }
    });
    let $header_fixed_container = $('<div />', {class: 'mb-1'}).append($header_fixed_checkbox).append('<span>Fixed</span>');
    $container.append($header_fixed_container);

    let $dropdown_legacy_offset_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.main-header').hasClass('dropdown-legacy'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.main-header').addClass('dropdown-legacy');
        } else {
            $('.main-header').removeClass('dropdown-legacy');
        }
    });
    let $dropdown_legacy_offset_container = $('<div />', {class: 'mb-1'}).append($dropdown_legacy_offset_checkbox).append('<span>Dropdown Legacy Offset</span>');
    $container.append($dropdown_legacy_offset_container);

    let $no_border_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.main-header').hasClass('border-bottom-0'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.main-header').addClass('border-bottom-0');
        } else {
            $('.main-header').removeClass('border-bottom-0');
        }
    });
    let $no_border_container = $('<div />', {class: 'mb-4'}).append($no_border_checkbox).append('<span>No Border</span>');
    $container.append($no_border_container);

    // Sidebar Options

    $container.append('<h6>Sidebar Options</h6>');

    let $sidebar_collapsed_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('sidebar-collapse'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('sidebar-collapse');
            $(window).trigger('resize');
        } else {
            $('body').removeClass('sidebar-collapse');
            $(window).trigger('resize');
        }
    });
    let $sidebar_collapsed_container = $('<div />', { class: 'mb-1' }).append($sidebar_collapsed_checkbox).append('<span>Collapsed</span>');
    $container.append($sidebar_collapsed_container);

    $(document).on('collapsed.lte.pushmenu', '[data-widget="pushmenu"]', function () {
        $sidebar_collapsed_checkbox.prop('checked', true);
    });
    $(document).on('shown.lte.pushmenu', '[data-widget="pushmenu"]', function () {
        $sidebar_collapsed_checkbox.prop('checked', false);
    });

    let $sidebar_fixed_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('layout-fixed'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('layout-fixed');
            $(window).trigger('resize');
        } else {
            $('body').removeClass('layout-fixed');
            $(window).trigger('resize');
        }
    });
    let $sidebar_fixed_container = $('<div />', { class: 'mb-1' }).append($sidebar_fixed_checkbox).append('<span>Fixed</span>');
    $container.append($sidebar_fixed_container);

    let $sidebar_mini_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('sidebar-mini'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('sidebar-mini');
        } else {
            $('body').removeClass('sidebar-mini');
        }
    });
    let $sidebar_mini_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_checkbox).append('<span>Sidebar Mini</span>');
    $container.append($sidebar_mini_container);

    let $sidebar_mini_md_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('sidebar-mini-md'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('sidebar-mini-md');
        } else {
            $('body').removeClass('sidebar-mini-md');
        }
    });
    let $sidebar_mini_md_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_md_checkbox).append('<span>Sidebar Mini MD</span>');
    $container.append($sidebar_mini_md_container);

    let $sidebar_mini_xs_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('sidebar-mini-xs'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('sidebar-mini-xs');
        } else {
            $('body').removeClass('sidebar-mini-xs');
        }
    });
    let $sidebar_mini_xs_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_xs_checkbox).append('<span>Sidebar Mini XS</span>');
    $container.append($sidebar_mini_xs_container);

    let $flat_sidebar_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.nav-sidebar').hasClass('nav-flat'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.nav-sidebar').addClass('nav-flat');
        } else {
            $('.nav-sidebar').removeClass('nav-flat');
        }
    });
    let $flat_sidebar_container = $('<div />', { class: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Nav Flat Style</span>');
    $container.append($flat_sidebar_container);

    let $legacy_sidebar_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.nav-sidebar').hasClass('nav-legacy'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.nav-sidebar').addClass('nav-legacy');
        } else {
            $('.nav-sidebar').removeClass('nav-legacy');
        }
    });
    let $legacy_sidebar_container = $('<div />', { class: 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Nav Legacy Style</span>');
    $container.append($legacy_sidebar_container);

    let $compact_sidebar_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.nav-sidebar').hasClass('nav-compact'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.nav-sidebar').addClass('nav-compact');
        } else {
            $('.nav-sidebar').removeClass('nav-compact');
        }
    });
    let $compact_sidebar_container = $('<div />', { class: 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Nav Compact</span>');
    $container.append($compact_sidebar_container);

    let $child_indent_sidebar_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.nav-sidebar').hasClass('nav-child-indent'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.nav-sidebar').addClass('nav-child-indent');
        } else {
            $('.nav-sidebar').removeClass('nav-child-indent');
        }
    });
    let $child_indent_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Nav Child Indent</span>');
    $container.append($child_indent_sidebar_container);

    let $child_hide_sidebar_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.nav-sidebar').hasClass('nav-collapse-hide-child'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.nav-sidebar').addClass('nav-collapse-hide-child');
        } else {
            $('.nav-sidebar').removeClass('nav-collapse-hide-child');
        }
    });
    let $child_hide_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_hide_sidebar_checkbox).append('<span>Nav Child Hide on Collapse</span>');
    $container.append($child_hide_sidebar_container);

    let $no_expand_sidebar_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('.main-sidebar').addClass('sidebar-no-expand');
        } else {
            $('.main-sidebar').removeClass('sidebar-no-expand');
        }
    });
    let $no_expand_sidebar_container = $('<div />', { class: 'mb-4' }).append($no_expand_sidebar_checkbox).append('<span>Disable Hover/Focus Auto-Expand</span>');
    $container.append($no_expand_sidebar_container);

    // Footer Options

    $container.append('<h6>Footer Options</h6>')
    let $footer_fixed_checkbox = $('<input />', {
        type: 'checkbox',
        value: 1,
        checked: $('body').hasClass('layout-footer-fixed'),
        class: 'mr-1'
    }).on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('layout-footer-fixed');
        } else {
            $('body').removeClass('layout-footer-fixed');
        }
    });
    let $footer_fixed_container = $('<div />', { class: 'mb-4' }).append($footer_fixed_checkbox).append('<span>Fixed</span>');
    $container.append($footer_fixed_container);
})(jQuery);