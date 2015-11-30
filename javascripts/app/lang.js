/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
!function(e){function t(t){if(t&&""!==t){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+t+"']").addClass("active");for(var n=0;n<a.length;n++)$(".highlight."+a[n]).parent().hide();$(".highlight."+t).parent().show(),e.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function n(e){if(history){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history.pushState({},"","?"+e+"#"+t),localStorage.setItem("language",e)}}function o(e){var n=(e[0],localStorage.getItem("language"));a=e,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),a)?(t(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):t(null!==n&&-1!=jQuery.inArray(n,a)?n:a[0])}var a=[];e.setupLanguages=o,e.activateLanguage=t,$(function(){$(".lang-selector a").on("click",function(){var e=$(this).data("language-name"),o=new CustomEvent("languagechange",{detail:e});return n(e),t(e),window.dispatchEvent(o),!1}),window.onpopstate=function(){t(window.location.search.substr(1))}})}(window);