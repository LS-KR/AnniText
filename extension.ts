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

import {an} from './config.js';
import {ifor, scheduledLoopTask} from './helper.js'

let i = 0;

const Indicator = GObject.registerClass(
    class Indicator extends PanelMenu.Button {
        _init() {
            super._init(0.0, 'My Shiny Indicator');

            const now = new Date();

            let label = new St.Label({ 
              text: `${an[i].name} ${(((now.getTime() - an[i].date.getTime()) / 86400000) | 0) + 1} 天`, 
              x_align: Clutter.ActorAlign.START,
              y_align: Clutter.ActorAlign.CENTER, 
              style_class: 'panel-button' 
            })

            this.add_child(label);

            this.connect('button-press-event', () => {
              i = ifor(i, an.length)
              this.remove_child(label);
              label = new St.Label({ 
                text: `${an[i].name} ${(((now.getTime() - an[i].date.getTime()) / 86400000) | 0) + 1} 天`, 
                x_align: Clutter.ActorAlign.START,
                y_align: Clutter.ActorAlign.CENTER, 
                style_class: 'panel-button' 
              })
              this.add_child(label);
            })
        }
    }
)

export default class MyExtension extends Extension {
  indicator: any;

  enable() {
    this.indicator = new Indicator(3, '', true)
    Main.panel.addToStatusArea(this.uuid, this.indicator, -1, 'center')
  }

  disable() {
    this.indicator.destroy()
    this.indicator = null
  }
}