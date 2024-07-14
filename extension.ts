import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import Meta from 'gi://Meta';
import Shell from 'gi://Shell';
import GObject from 'gi://GObject';
import St from 'gi://St';
import Clutter from 'gi://Clutter';
import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const Indicator = GObject.registerClass(
    class Indicator extends PanelMenu.Button {
        _init() {
            super._init(0.0, 'My Shiny Indicator');

            const now = new Date();
            const start = new Date(2022, 7, 22, 0, 0, 0);
    
            this.add_child(new St.Label({ 
                text: `枫芷纪日 ${((now.getTime() - start.getTime()) / 86400000) | 0} 天`, 
                x_align: Clutter.ActorAlign.START,
                y_align: Clutter.ActorAlign.CENTER, 
                style_class: 'panel-button', 
                track_hover: true
            }));
        }
    }
)

export default class MyExtension extends Extension {
  indicator = new Indicator(3, '', true);

  enable() {
    Main.panel.addToStatusArea(this.uuid, this.indicator, -1, 'center')
  }

  disable() {
    this.indicator.destroy()
  }
}