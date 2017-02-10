// ==UserScript==
// @name        KIT autoload layout fix
// @namespace   github.com/moben
// @description Fixes the layout on the KIT Studentenwerk site to be dynamic
// @include     https://www.sw-ka.de/card/
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle ( "									\
	body * {									\
		height: auto !important;				\
	}											\
" );
