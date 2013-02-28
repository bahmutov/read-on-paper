var dbg = function(s) {
	if(typeof console !== 'undefined')
		console.log("Readability: " + s);
};

var readability = {
	version:     '0.5.1',
	// emailSrc:    'http://lab.arc90.com/experiments/readability/email.php',
	// kindleSrc:   'http://lab.arc90.com/experiments/readability/kindle.php',
	iframeLoads: 0,
	frameHack:   false, /**
	                     * The frame hack is to workaround a firefox bug where if you
						 * pull content out of a frame and stick it into the parent element, the scrollbar won't appear.
						 * So we fake a scrollbar in the wrapping div.
						**/
	bodyCache:  null,   /* Cache the body HTML in case we need to re-use it later */
	
	/**
	 * All of the regular expressions in use within readability.
	 * Defined up here so we don't instantiate them repeatedly in loops.
	 **/
	regexps: {
		unlikelyCandidatesRe:   /combx|comment|disqus|foot|header|menu|meta|nav|rss|shoutbox|sidebar|sponsor/i,
		okMaybeItsACandidateRe: /and|article|body|column|main/i,
		positiveRe:             /article|body|content|entry|hentry|page|pagination|post|text/i,
		negativeRe:             /combx|comment|contact|foot|footer|footnote|link|media|meta|promo|related|scroll|shoutbox|sponsor|tags|widget/i,
		divToPElementsRe:       /<(a|blockquote|dl|div|img|ol|p|pre|table|ul)/i,
		replaceBrsRe:           /(<br[^>]*>[ \n\r\t]*){2,}/gi,
		replaceFontsRe:         /<(\/?)font[^>]*>/gi,
		trimRe:                 /^\s+|\s+$/g,
		normalizeRe:            /\s{2,}/g,
		killBreaksRe:           /(<br\s*\/?>(\s|&nbsp;?)*){1,}/g,
		videoRe:                /http:\/\/(www\.)?(youtube|vimeo)\.com/i
	},

	/**
	 * Runs readability.
	 * 
	 * Workflow:
	 *  1. Prep the document by removing script tags, css, etc.
	 *  2. Build readability's DOM tree.
	 *  3. Grab the article content from the current dom tree.
	 *  4. Replace the current DOM tree with the new one.
	 *  5. Read peacefully.
	 *
	 * @return void
	 **/
	init: function(preserveUnlikelyCandidates) {
		console.log('starting readability');
		/*
		preserveUnlikelyCandidates = (typeof preserveUnlikelyCandidates == 'undefined') ? false : preserveUnlikelyCandidates;

		if(document.body && !readability.bodyCache)
			readability.bodyCache = document.body.innerHTML;
		
		readability.prepDocument();
		
		var overlay        = document.createElement("DIV");
		var innerDiv       = document.createElement("DIV");
		var articleTools   = readability.getArticleTools();
		var articleTitle   = readability.getArticleTitle();
		var articleContent = readability.grabArticle(preserveUnlikelyCandidates);
		var articleFooter  = readability.getArticleFooter();

		if(readability.getInnerText(articleContent, false) == "")
		{
			if(!preserveUnlikelyCandidates) {
				document.body.innerHTML = readability.bodyCache;
				return readability.init(true);				
			}
			else
			{
				articleContent.innerHTML = "<p>Sorry, readability was unable to parse this page for content. If you feel like it should have been able to, please <a href='http://code.google.com/p/arc90labs-readability/issues/entry'>let us know by submitting an issue.</a></p>";
			}
		}

		overlay.id              = "readOverlay";
		innerDiv.id             = "readInner";

		document.body.className = readStyle;
		overlay.className       = readStyle;
		innerDiv.className      = readMargin + " " + readSize;

		articleContent.appendChild( articleFooter  );
		      innerDiv.appendChild( articleTitle   );
		      innerDiv.appendChild( articleContent );
		       overlay.appendChild( articleTools   );
		       overlay.appendChild( innerDiv       );

		document.body.innerHTML = "";
		document.body.insertBefore(overlay, document.body.firstChild);

		if(readability.frameHack)
		{
			var readOverlay = document.getElementById('readOverlay');
			readOverlay.style.height = '100%';
			readOverlay.style.overflow = 'auto';
		}
		*/
	}

};

console.log('starting readibility');
readability.init();