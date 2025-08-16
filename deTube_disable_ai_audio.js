// ==UserScript==
// @name            deTube Disable AI Audio
// @name:de         deTube KI-Audio deaktivieren
// @name:es         deTube Desactivar Audio IA
// @name:fr         deTube Désactiver Audio IA
// @name:it         deTube Disattiva Audio IA
// @name:pt         deTube Desativar Áudio IA
// @name:ru         deTube Отключить ИИ Аудио
// @name:ja         deTube AI音声を無効化
// @name:ko         deTube AI 오디오 비활성화
// @name:zh-CN      deTube 禁用AI音频
// @name:zh-TW      deTube 停用AI音訊
// @name:nl         deTube AI-Audio uitschakelen
// @name:pl         deTube Wyłącz Audio AI
// @name:sv         deTube Inaktivera AI-ljud
// @name:da         deTube Deaktiver AI-lyd
// @name:no         deTube Deaktiver AI-lyd
// @name:fi         deTube Poista AI-ääni käytöstä
// @name:tr         deTube AI Sesini Devre Dışı Bırak
// @name:ar         deTube تعطيل الصوت بالذكاء الاصطناعي
// @name:he         deTube השבת אודיו AI
// @name:hi         deTube AI ऑडियो अक्षम करें
// @name:th         deTube ปิดใช้งานเสียง AI
// @name:vi         deTube Tắt Âm thanh AI
// @version         0.2.12
// @description     Disables automatically applied AI/translated audio, resets to original audio. Runs automatically, but can also be triggered with CTRL+ALT+R.
// @description:de  Deaktiviert automatisch angewendeten KI-/Übersetzungs-Ton und stellt den Originalton wieder her. Läuft automatisch, kann aber auch mit STRG+ALT+R ausgelöst werden.
// @description:es  Desactiva el audio de IA/traducción aplicado automáticamente y restaura el audio original. Se ejecuta automáticamente, pero también puede activarse con CTRL+ALT+R.
// @description:fr  Désactive l’audio IA/traduit appliqué automatiquement et rétablit l’audio original. Fonctionne automatiquement, mais peut aussi être déclenché avec CTRL+ALT+R.
// @description:it  Disattiva l’audio AI/tradotto applicato automaticamente e ripristina l’audio originale. Funziona automaticamente, ma può anche essere attivato con CTRL+ALT+R.
// @description:pt  Desativa o áudio AI/traduzido aplicado automaticamente e restaura o áudio original. Funciona automaticamente, mas também pode ser ativado com CTRL+ALT+R.
// @description:ru  Отключает автоматически применённый ИИ/переведённый звук и восстанавливает оригинальную дорожку. Работает автоматически, но можно запустить с CTRL+ALT+R.
// @description:ja  自動で適用されたAI/翻訳音声を無効化し、元の音声に戻します。自動で実行されますが、CTRL+ALT+Rでも起動できます。
// @description:ko  자동으로 적용된 AI/번역 오디오를 비활성화하고 원래 오디오로 복원합니다. 자동으로 실행되며, CTRL+ALT+R로도 실행할 수 있습니다.
// @description:zh-CN 禁用自动应用的AI/翻译音频，并恢复原始音频。自动运行，也可通过CTRL+ALT+R手动触发。
// @description:zh-TW 停用自動套用的AI/翻譯音訊，並恢復原始音訊。會自動執行，也可用 CTRL+ALT+R 觸發。
// @description:nl  Schakelt automatisch toegepaste AI/vertaalde audio uit en herstelt het originele geluid. Werkt automatisch, maar kan ook handmatig gestart worden met CTRL+ALT+R.
// @description:pl  Wyłącza automatycznie stosowany dźwięk AI/tłumaczenie i przywraca oryginalny dźwięk. Działa automatycznie, ale można go też uruchomić skrótem CTRL+ALT+R.
// @description:sv  Inaktiverar automatiskt tillämpat AI/översatt ljud och återställer originalet. Körs automatiskt men kan också aktiveras med CTRL+ALT+R.
// @description:da  Deaktiverer automatisk anvendt AI/oversat lyd og gendanner originallyden. Kører automatisk, men kan også aktiveres med CTRL+ALT+R.
// @description:no  Deaktiverer automatisk brukt AI/oversatt lyd og gjenoppretter original lyd. Kjører automatisk, men kan også utløses med CTRL+ALT+R.
// @description:fi  Poistaa automaattisesti käytetyn AI/käännetyn äänen käytöstä ja palauttaa alkuperäisen äänen. Toimii automaattisesti, mutta voidaan myös käynnistää näppäimillä CTRL+ALT+R.
// @description:tr  Otomatik olarak uygulanan AI/çeviri sesini devre dışı bırakır ve orijinal sesi geri yükler. Otomatik çalışır, ancak CTRL+ALT+R ile de tetiklenebilir.
// @description:ar  يعطّل الصوت المترجم أو المطبّق تلقائيًا بالذكاء الاصطناعي ويستعيد الصوت الأصلي. يعمل تلقائيًا، ويمكن تشغيله أيضًا بـ CTRL+ALT+R.
// @description:he  משבית אודיו AI/מתורגם שמופעל אוטומטית ומשחזר את השמע המקורי. פועל אוטומטית, אך ניתן גם להפעיל עם CTRL+ALT+R.
// @description:hi  स्वचालित रूप से लागू AI/अनुवादित ऑडियो को अक्षम करता है और मूल ऑडियो को पुनर्स्थापित करता है। यह स्वतः चलता है, लेकिन CTRL+ALT+R से भी सक्रिय किया जा सकता है।
// @description:th  ปิดเสียง AI/แปลอัตโนมัติที่เปิดใช้งานโดยอัตโนมัติ และคืนค่าเสียงต้นฉบับ ทำงานอัตโนมัติ หรือเรียกใช้ด้วย CTRL+ALT+R ได้
// @description:vi  Tắt âm thanh AI/được dịch tự động và khôi phục âm thanh gốc. Tự động chạy, nhưng cũng có thể kích hoạt bằng CTRL+ALT+R.
// @author          polymegos
// @namespace       https://github.com/polymegos/deTube_disable_ai_audio
// @supportURL      https://github.com/polymegos/deTube_disable_ai_audio/issues
// @license         MIT
// @match           *://www.youtube.com/*
// @match           *://www.youtube-nocookie.com/*
// @match           *://m.youtube.com/*
// @match           *://music.youtube.com/*
// @grant           GM_getValue
// @grant           GM_setValue
// @run-at          document-start
// @compatible      firefox
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
  'use strict';

  // Disable AI Audio Tracks
  (function audioTrackScript() {
    let lastProcessedUrl = '';
    let liftFromAudioTrack = false;
    function log(message, level = 'info') {
      const prefix = "[deTube] [Disable AI Audio]";
      switch(level) {
        case 'error':
          console.error(`%c${prefix}`, 'color: red; font-weight: bold;', message);
          break;
        case 'warn':
          console.warn(`%c${prefix}`, 'color: orange; font-weight: bold;', message);
          break;
        default:
          console.log(`%c${prefix}`, 'color: green; font-weight: bold;', message);
      }
    }

    function clickElement(element) {
      if (!element) return false;
      try {
        element.click();
        return true;
      } catch (e1) {
        try {
          element.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true}));
          return true;
        } catch (e2) {
          try {
            element.focus();
            element.dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));
            return true;
          } catch (e3) {
            log(`Click failed: ${e3.message}`, 'error');
            return false;
          }
        }
      }
    }

    function waitForElement(selector, timeout = 10000) {
      return new Promise((resolve, reject) => {
        const start = Date.now();
        (function poll() {
          const el = document.querySelector(selector);
          if (el) return resolve(el);
          if (Date.now() - start > timeout) return reject(new Error(`Timeout: ${selector}`));
          setTimeout(poll, 100);
        })();
      });
    }

    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    const AUDIO_TRACK_STRINGS = new Set([
      'audiotrack', 'audio track', 'audio tracks', // English
      'piste audio', 'pistes audio', 'son', // French
      'audiospur', 'tonspur', 'audio-spur', // German
      'pista de audio', 'pista audio', 'audio', // Spanish
      'traccia audio', 'audio traccia', // Italian
      'faixa de áudio', 'trilha sonora', // Portuguese
      'аудиодорожка', 'звуковая дорожка', // Russian
      'オーディオトラック', '音声トラック', // Japanese
      '오디오 트랙', '음성 트랙', // Korean
      '音轨', '音频轨道', // Chinese (Simplified/Traditional)
      'geluidsspoor', // Dutch
      'ścieżka dźwiękowa', 'audio ścieżka', // Polish
      'ljudspår', 'audio spår', // Swedish
      'lydspor', 'audio spor', // Danish / Norwegian
      'ääniraita', 'ääni', // Finnish
      'ses parçası', 'ses izi', // Turkish
      'מסלול אודיו', 'רצועת אודיו', // Hebrew
      'เสียง', 'แทร็กเสียง', // Thai
      'âm thanh', 'bản âm thanh', // Vietnamese
      'مسار صوتي', 'المسار الصوتي', 'الصوت', // Arabic
      'ऑडियो ट्रैक', 'ध्वनि पथ', // Hindi
      'jalur audio', 'trek audio', // Indonesian
      'trek audio', 'laluan audio', // Malay
      'ηχητικό κομμάτι', 'ήχος', // Greek
      'pistă audio', 'traseu audio', // Romanian
      'zvuková stopa', 'audio stopa', // Czech
      'hangsáv', 'audió sáv', // Hungarian
      'аудіодоріжка', 'звукова доріжка', // Ukrainian
      'аудио пътека', 'звукова пътека', // Bulgarian
      'অডিও ট্র্যাক', 'শব্দ ট্র্যাক', // Bengali
      'sauti ya sauti', 'kifuatilia sauti', // Swahili
      'tunog na landas', // Filipino (Tagalog)
      'hljóðrás', // Icelandic
      'audio celiņš', // Latvian
      'garso takelis', // Lithuanian
      'zvuková stopa', // Slovak
      'ઓડિયો ટ્રેક', 'ધ્વનિ પથ' // Gujarati
    ].map(s => s.toLowerCase()));

    const ORIGINAL_TRACK_STRINGS = new Set([
      'original',  // English, German, Spanish, Romanian, Indonesian
      'origine',   // French
      'originale', // Italian
      'nativo',    // Portuguese
      'оригинал',  // Russian
      'オリジナル',  // Japanese
      '오리지널',    // Korean
      '原版', '原声', '原始', // Chinese (Simplified/Traditional)
      'origineel',    // Dutch
      'oryginalny',   // Polish
      'ursprunglig',  // Swedish
      'opprinnelig',  // Danish / Norwegian
      'alkuperäinen', // Finnish
      'orijinal', // Turkish
      'מקורי',    // Hebrew
      'ต้นฉบับ', 'ดั้งเดิม', // Thai
      'nguyên bản', 'gốc', // Vietnamese
      'الأصلي', 'النسخة الأصلية', // Arabic
      'मूल', 'असली', // Hindi
      'asli', // Indonesian
      'asli', 'asal', // Malay
      'πρωτότυπο', 'αυθεντικό', // Greek
      'nativ', // Romanian
      'původní', 'originální', // Czech
      'eredeti', // Hungarian
      'початковий', // Ukrainian
      'оригинален', 'първоначален', // Bulgarian
      'মূল', 'আসল', // Bengali
      'asili', 'halisi', // Swahili
      'orihinal', 'likas', // Filipino (Tagalog)
      'frumlegur', // Icelandic
      'oriģināls', // Latvian
      'originalus', // Lithuanian
      'pôvodný', // Slovak
      'મૂળ' // Gujarati
    ].map(s => s.toLowerCase()));

    function matchesText(el, patternsSet) {
      if (!el?.textContent) return false;
      const text = el.textContent.toLowerCase();
      for (const str of patternsSet) {
        if (text.includes(str)) return true;
      }
      return false;
    }

    function hideSettingsMenu() {
      const menu = document.querySelector('.ytp-settings-menu');
      if (menu) {
        menu.dataset.detubeHidden = "true";
        menu.style.visibility = 'hidden';
        menu.style.pointerEvents = 'none';
      }
    }

    function restoreSettingsMenuVisibility() {
      const menu = document.querySelector('.ytp-settings-menu');
      if (menu && menu.dataset.detubeHidden === "true") {
        menu.style.visibility = '';
        menu.style.pointerEvents = '';
        delete menu.dataset.detubeHidden;
      }
    }

    async function forceOriginalAudioTrack() {
      let settingsButton;
      hideSettingsMenu();
      try {
        settingsButton = await waitForElement('.ytp-settings-button', 5000);
        clickElement(settingsButton);
        await new Promise(res => setTimeout(res, 800));

        const menu = document.querySelector('.ytp-settings-menu');
        if (!menu) throw new Error('Settings menu not found');

        const items = Array.from(menu.querySelectorAll('.ytp-menuitem'));
        const audioItem = items.find(el => matchesText(el, AUDIO_TRACK_STRINGS));
        if (!audioItem) {
          log('Audio track menu item not found', 'warn');
          setTimeout(() => clickElement(settingsButton), 200);
          return;
        }

        clickElement(audioItem);
        await new Promise(res => setTimeout(res, 300));

        const submenu = document.querySelector('.ytp-settings-menu');
        const subitems = submenu ? Array.from(submenu.querySelectorAll('.ytp-menuitem')) : [];
        const originalOption = subitems.find(el => matchesText(el, ORIGINAL_TRACK_STRINGS));

        if (originalOption) {
          clickElement(originalOption);
          log('Switched to original audio track');
        } else {
          log('Original audio track not found', 'warn');
        }
      } catch (err) {
        log(`Audio switch failed: ${err.message}`, 'error');
      } finally {
        try {
          const menu = document.querySelector('.ytp-settings-menu');
          if (menu?.offsetParent !== null) {
            log('Closing settings menu...');
            if (settingsButton) {
              clickElement(settingsButton);
              setTimeout(() => {
                const menuStillOpen = document.querySelector('.ytp-settings-menu');
                if (menuStillOpen?.offsetParent !== null) {
                  clickElement(settingsButton);
                  log('Retrying menu close');
                }
              }, 400);
            }
          }
        } catch (closeErr) {
          log(`Menu close logic failed: ${closeErr.message}`, 'error');
        } finally {
          setTimeout(() => {
            document.querySelectorAll('.ytp-settings-menu').forEach(menu => {
              if (menu.offsetParent !== null) {
                menu.style.display = 'none';
                log('Force-hid lingering settings menu (fallback)', 'warn');
              }
            });
          }, 500);
        }
        setTimeout(restoreSettingsMenuVisibility, 1000);
      }
    }

    function monitorVideoPlayback() {
      const video = document.querySelector('video');
      if (!video) {
        new MutationObserver((_, obs) => {
          const v = document.querySelector('video');
          if (v) {
            obs.disconnect();
            monitorVideoPlayback();
          }
        }).observe(document.body, { childList: true, subtree: true });
        return;
      }

      const debouncedAudioHandler = debounce(() => {
        if (!liftFromAudioTrack) {
          forceOriginalAudioTrack();
        }
      }, 300);
      
      video.addEventListener('playing', debouncedAudioHandler, { once: true });
    }

    function init() {
      liftFromAudioTrack = false;
      if (location.href !== lastProcessedUrl && (location.pathname.startsWith('/watch') || location.pathname.startsWith('/embed'))) {
        lastProcessedUrl = location.href;
        log('New video page detected. Monitoring for playback.');
        monitorVideoPlayback();
        const navEvents = ['yt-navigate-finish','yt-page-data-updated','yt-navigate-start','popstate'];
        for (const e of navEvents) {
          window.addEventListener(e, () => setTimeout(monitorVideoPlayback, 300), { once: true });
        }
        let lastUrl = location.href;
        new MutationObserver(() => {
          const currentUrl = location.href;
          if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            log('URL changed');
            liftFromAudioTrack = false;
            monitorVideoPlayback();
          }
        }).observe(document.body, { childList: true, subtree: true });
      }

      document.addEventListener('click', (e) => {
        const el = e.target?.closest('.ytp-menuitem');
        if (el) {
          liftFromAudioTrack = true;
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'r') {
          log('Manual audio track reset triggered (CTRL+ALT+R)');
          forceOriginalAudioTrack();
        }
      });
    }

    document.readyState === 'loading' ?
      document.addEventListener('DOMContentLoaded', init) :
      init();
  })();

})();
