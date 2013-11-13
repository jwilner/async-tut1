// Compiled by ClojureScript 0.0-2030
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
async_tut1.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
async_tut1.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
async_tut1.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.call(null,out,res);
}));
return out;
});
async_tut1.core.query_url = (function query_url(q){return [cljs.core.str(async_tut1.core.wiki_search_url),cljs.core.str(q)].join('');
});
async_tut1.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
async_tut1.core.render_query = (function render_query(results){return [cljs.core.str("<ol>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__3819__auto__ = (function iter__13532(s__13533){return (new cljs.core.LazySeq(null,(function (){var s__13533__$1 = s__13533;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13533__$1);if(temp__4092__auto__)
{var s__13533__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13533__$2))
{var c__3817__auto__ = cljs.core.chunk_first.call(null,s__13533__$2);var size__3818__auto__ = cljs.core.count.call(null,c__3817__auto__);var b__13535 = cljs.core.chunk_buffer.call(null,size__3818__auto__);if((function (){var i__13534 = 0;while(true){
if((i__13534 < size__3818__auto__))
{var result = cljs.core._nth.call(null,c__3817__auto__,i__13534);cljs.core.chunk_append.call(null,b__13535,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));
{
var G__13536 = (i__13534 + 1);
i__13534 = G__13536;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13535),iter__13532.call(null,cljs.core.chunk_rest.call(null,s__13533__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13535),null);
}
} else
{var result = cljs.core.first.call(null,s__13533__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__13532.call(null,cljs.core.rest.call(null,s__13533__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3819__auto__.call(null,results);
})())),cljs.core.str("</ol>")].join('');
});
async_tut1.core.init = (function init(){var clicks = async_tut1.core.listen.call(null,goog.dom.getElement("search"),"click");var results_view = goog.dom.getElement("results");var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13596){var state_val_13597 = (state_13596[1]);if((state_val_13597 === 8))
{var inst_13584 = (state_13596[2]);var inst_13585 = cljs.core.nth.call(null,inst_13584,0,null);var inst_13586 = cljs.core.nth.call(null,inst_13584,1,null);var inst_13587 = async_tut1.core.render_query.call(null,inst_13586);var inst_13588 = results_view.innerHTML = inst_13587;var state_13596__$1 = (function (){var statearr_13598 = state_13596;(statearr_13598[7] = inst_13588);
(statearr_13598[8] = inst_13585);
return statearr_13598;
})();var statearr_13599_13613 = state_13596__$1;(statearr_13599_13613[2] = null);
(statearr_13599_13613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 7))
{var inst_13578 = (state_13596[2]);var inst_13580 = async_tut1.core.user_query.call(null);var inst_13581 = async_tut1.core.query_url.call(null,inst_13580);var inst_13582 = async_tut1.core.jsonp.call(null,inst_13581);var state_13596__$1 = (function (){var statearr_13600 = state_13596;(statearr_13600[9] = inst_13578);
return statearr_13600;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13596__$1,8,inst_13582);
} else
{if((state_val_13597 === 6))
{var inst_13592 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13601_13614 = state_13596__$1;(statearr_13601_13614[2] = inst_13592);
(statearr_13601_13614[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 5))
{var state_13596__$1 = state_13596;var statearr_13602_13615 = state_13596__$1;(statearr_13602_13615[2] = null);
(statearr_13602_13615[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 4))
{var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13596__$1,7,clicks);
} else
{if((state_val_13597 === 3))
{var inst_13594 = (state_13596[2]);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13596__$1,inst_13594);
} else
{if((state_val_13597 === 2))
{var state_13596__$1 = state_13596;if(true)
{var statearr_13603_13616 = state_13596__$1;(statearr_13603_13616[1] = 4);
} else
{var statearr_13604_13617 = state_13596__$1;(statearr_13604_13617[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 1))
{var state_13596__$1 = state_13596;var statearr_13605_13618 = state_13596__$1;(statearr_13605_13618[2] = null);
(statearr_13605_13618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_13609 = (new Array(10));(statearr_13609[0] = state_machine__5425__auto__);
(statearr_13609[1] = 1);
return statearr_13609;
});
var state_machine__5425__auto____1 = (function (state_13596){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13610){if((e13610 instanceof Object))
{var ex__5428__auto__ = e13610;var statearr_13611_13619 = state_13596;(statearr_13611_13619[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13620 = state_13596;
state_13596 = G__13620;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13596){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13612 = f__5495__auto__.call(null);(statearr_13612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_13612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
async_tut1.core.init.call(null);

//# sourceMappingURL=core.js.map