// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.magfalms.magfaapp';
    static appname = 'MagfaELM';
    static desktopappname = 'Magfa Desktop';
    static versioncode = 3520;
    static versionname = '3.5.20';
    static cache_expiration_time = 300000;
    static default_lang = 'fa';
    static languages: any = {
        en: 'English',
        fa: 'فارسی'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites: any = {
        student: {
            url: 'https://school.demo.moodle.net',
            username: 'student',
            password: 'moodle'
        },
        teacher: {
            url: 'https://school.demo.moodle.net',
            username: 'teacher',
            password: 'moodle'
        }
    };
    static gcmpn = '770545864159';
    static customurlscheme = 'moodlemobile';
    static siteurl = '';
    static multisitesdisplay = '';
    static skipssoconfirmation = false;
    static forcedefaultlanguage = true;
    static privacypolicy = 'https://moodle.org/mod/page/view.php?id=8148';
    static compilationtime = 1537089827314;
}
