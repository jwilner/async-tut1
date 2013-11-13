// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14072 = (function (f,fn_handler,meta14073){
this.f = f;
this.fn_handler = fn_handler;
this.meta14073 = meta14073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14072.cljs$lang$type = true;
cljs.core.async.t14072.cljs$lang$ctorStr = "cljs.core.async/t14072";
cljs.core.async.t14072.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14072");
});
cljs.core.async.t14072.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14074){var self__ = this;
var _14074__$1 = this;return self__.meta14073;
});
cljs.core.async.t14072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14074,meta14073__$1){var self__ = this;
var _14074__$1 = this;return (new cljs.core.async.t14072(self__.f,self__.fn_handler,meta14073__$1));
});
cljs.core.async.__GT_t14072 = (function __GT_t14072(f__$1,fn_handler__$1,meta14073){return (new cljs.core.async.t14072(f__$1,fn_handler__$1,meta14073));
});
}
return (new cljs.core.async.t14072(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14076 = buff;if(G__14076)
{var bit__3752__auto__ = null;if(cljs.core.truth_((function (){var or__3133__auto__ = bit__3752__auto__;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return G__14076.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14076);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14077 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14077);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14077);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3124__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3922__auto___14078 = n;var x_14079 = 0;while(true){
if((x_14079 < n__3922__auto___14078))
{(a[x_14079] = 0);
{
var G__14080 = (x_14079 + 1);
x_14079 = G__14080;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14081 = (i + 1);
i = G__14081;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14085 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14085 = (function (flag,alt_flag,meta14086){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14086 = meta14086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14085.cljs$lang$type = true;
cljs.core.async.t14085.cljs$lang$ctorStr = "cljs.core.async/t14085";
cljs.core.async.t14085.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14085");
});
cljs.core.async.t14085.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14087){var self__ = this;
var _14087__$1 = this;return self__.meta14086;
});
cljs.core.async.t14085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14087,meta14086__$1){var self__ = this;
var _14087__$1 = this;return (new cljs.core.async.t14085(self__.flag,self__.alt_flag,meta14086__$1));
});
cljs.core.async.__GT_t14085 = (function __GT_t14085(flag__$1,alt_flag__$1,meta14086){return (new cljs.core.async.t14085(flag__$1,alt_flag__$1,meta14086));
});
}
return (new cljs.core.async.t14085(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14091 = (function (cb,flag,alt_handler,meta14092){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14092 = meta14092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14091.cljs$lang$type = true;
cljs.core.async.t14091.cljs$lang$ctorStr = "cljs.core.async/t14091";
cljs.core.async.t14091.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14091");
});
cljs.core.async.t14091.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14093){var self__ = this;
var _14093__$1 = this;return self__.meta14092;
});
cljs.core.async.t14091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14093,meta14092__$1){var self__ = this;
var _14093__$1 = this;return (new cljs.core.async.t14091(self__.cb,self__.flag,self__.alt_handler,meta14092__$1));
});
cljs.core.async.__GT_t14091 = (function __GT_t14091(cb__$1,flag__$1,alt_handler__$1,meta14092){return (new cljs.core.async.t14091(cb__$1,flag__$1,alt_handler__$1,meta14092));
});
}
return (new cljs.core.async.t14091(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14094_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14094_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3133__auto__ = wport;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__14095 = (i + 1);
i = G__14095;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3133__auto__ = ret;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3124__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3124__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14096){var map__14098 = p__14096;var map__14098__$1 = ((cljs.core.seq_QMARK_.call(null,map__14098))?cljs.core.apply.call(null,cljs.core.hash_map,map__14098):map__14098);var opts = map__14098__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14096 = null;if (arguments.length > 1) {
  p__14096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14096);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14099){
var ports = cljs.core.first(arglist__14099);
var p__14096 = cljs.core.rest(arglist__14099);
return alts_BANG___delegate(ports,p__14096);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14107 = (function (ch,f,map_LT_,meta14108){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14108 = meta14108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14107.cljs$lang$type = true;
cljs.core.async.t14107.cljs$lang$ctorStr = "cljs.core.async/t14107";
cljs.core.async.t14107.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14107");
});
cljs.core.async.t14107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14110 = (function (fn1,_,meta14108,ch,f,map_LT_,meta14111){
this.fn1 = fn1;
this._ = _;
this.meta14108 = meta14108;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14111 = meta14111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14110.cljs$lang$type = true;
cljs.core.async.t14110.cljs$lang$ctorStr = "cljs.core.async/t14110";
cljs.core.async.t14110.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14110");
});
cljs.core.async.t14110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14110.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14100_SHARP_){return f1.call(null,(((p1__14100_SHARP_ == null))?null:self__.f.call(null,p1__14100_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14112){var self__ = this;
var _14112__$1 = this;return self__.meta14111;
});
cljs.core.async.t14110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14112,meta14111__$1){var self__ = this;
var _14112__$1 = this;return (new cljs.core.async.t14110(self__.fn1,self__._,self__.meta14108,self__.ch,self__.f,self__.map_LT_,meta14111__$1));
});
cljs.core.async.__GT_t14110 = (function __GT_t14110(fn1__$1,___$2,meta14108__$1,ch__$2,f__$2,map_LT___$2,meta14111){return (new cljs.core.async.t14110(fn1__$1,___$2,meta14108__$1,ch__$2,f__$2,map_LT___$2,meta14111));
});
}
return (new cljs.core.async.t14110(fn1,___$1,self__.meta14108,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3124__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14107.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14109){var self__ = this;
var _14109__$1 = this;return self__.meta14108;
});
cljs.core.async.t14107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14109,meta14108__$1){var self__ = this;
var _14109__$1 = this;return (new cljs.core.async.t14107(self__.ch,self__.f,self__.map_LT_,meta14108__$1));
});
cljs.core.async.__GT_t14107 = (function __GT_t14107(ch__$1,f__$1,map_LT___$1,meta14108){return (new cljs.core.async.t14107(ch__$1,f__$1,map_LT___$1,meta14108));
});
}
return (new cljs.core.async.t14107(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14116 = (function (ch,f,map_GT_,meta14117){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14117 = meta14117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14116.cljs$lang$type = true;
cljs.core.async.t14116.cljs$lang$ctorStr = "cljs.core.async/t14116";
cljs.core.async.t14116.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14116");
});
cljs.core.async.t14116.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14116.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14116.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14118){var self__ = this;
var _14118__$1 = this;return self__.meta14117;
});
cljs.core.async.t14116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14118,meta14117__$1){var self__ = this;
var _14118__$1 = this;return (new cljs.core.async.t14116(self__.ch,self__.f,self__.map_GT_,meta14117__$1));
});
cljs.core.async.__GT_t14116 = (function __GT_t14116(ch__$1,f__$1,map_GT___$1,meta14117){return (new cljs.core.async.t14116(ch__$1,f__$1,map_GT___$1,meta14117));
});
}
return (new cljs.core.async.t14116(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14122 = (function (ch,p,filter_GT_,meta14123){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14123 = meta14123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14122.cljs$lang$type = true;
cljs.core.async.t14122.cljs$lang$ctorStr = "cljs.core.async/t14122";
cljs.core.async.t14122.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14122");
});
cljs.core.async.t14122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14122.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14124){var self__ = this;
var _14124__$1 = this;return self__.meta14123;
});
cljs.core.async.t14122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14124,meta14123__$1){var self__ = this;
var _14124__$1 = this;return (new cljs.core.async.t14122(self__.ch,self__.p,self__.filter_GT_,meta14123__$1));
});
cljs.core.async.__GT_t14122 = (function __GT_t14122(ch__$1,p__$1,filter_GT___$1,meta14123){return (new cljs.core.async.t14122(ch__$1,p__$1,filter_GT___$1,meta14123));
});
}
return (new cljs.core.async.t14122(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7223__auto___14207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_14186){var state_val_14187 = (state_14186[1]);if((state_val_14187 === 1))
{var state_14186__$1 = state_14186;var statearr_14188_14208 = state_14186__$1;(statearr_14188_14208[2] = null);
(statearr_14188_14208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 2))
{var state_14186__$1 = state_14186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14186__$1,4,ch);
} else
{if((state_val_14187 === 3))
{var inst_14184 = (state_14186[2]);var state_14186__$1 = state_14186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14186__$1,inst_14184);
} else
{if((state_val_14187 === 4))
{var inst_14168 = (state_14186[7]);var inst_14168__$1 = (state_14186[2]);var inst_14169 = (inst_14168__$1 == null);var state_14186__$1 = (function (){var statearr_14189 = state_14186;(statearr_14189[7] = inst_14168__$1);
return statearr_14189;
})();if(cljs.core.truth_(inst_14169))
{var statearr_14190_14209 = state_14186__$1;(statearr_14190_14209[1] = 5);
} else
{var statearr_14191_14210 = state_14186__$1;(statearr_14191_14210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 5))
{var inst_14171 = cljs.core.async.close_BANG_.call(null,out);var state_14186__$1 = state_14186;var statearr_14192_14211 = state_14186__$1;(statearr_14192_14211[2] = inst_14171);
(statearr_14192_14211[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 6))
{var inst_14168 = (state_14186[7]);var inst_14173 = p.call(null,inst_14168);var state_14186__$1 = state_14186;if(cljs.core.truth_(inst_14173))
{var statearr_14193_14212 = state_14186__$1;(statearr_14193_14212[1] = 8);
} else
{var statearr_14194_14213 = state_14186__$1;(statearr_14194_14213[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 7))
{var inst_14182 = (state_14186[2]);var state_14186__$1 = state_14186;var statearr_14195_14214 = state_14186__$1;(statearr_14195_14214[2] = inst_14182);
(statearr_14195_14214[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 8))
{var inst_14168 = (state_14186[7]);var state_14186__$1 = state_14186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14186__$1,11,out,inst_14168);
} else
{if((state_val_14187 === 9))
{var state_14186__$1 = state_14186;var statearr_14196_14215 = state_14186__$1;(statearr_14196_14215[2] = null);
(statearr_14196_14215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 10))
{var inst_14179 = (state_14186[2]);var state_14186__$1 = (function (){var statearr_14197 = state_14186;(statearr_14197[8] = inst_14179);
return statearr_14197;
})();var statearr_14198_14216 = state_14186__$1;(statearr_14198_14216[2] = null);
(statearr_14198_14216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 11))
{var inst_14176 = (state_14186[2]);var state_14186__$1 = state_14186;var statearr_14199_14217 = state_14186__$1;(statearr_14199_14217[2] = inst_14176);
(statearr_14199_14217[1] = 10);
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
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_14203 = (new Array(9));(statearr_14203[0] = state_machine__7154__auto__);
(statearr_14203[1] = 1);
return statearr_14203;
});
var state_machine__7154__auto____1 = (function (state_14186){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_14186);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e14204){if((e14204 instanceof Object))
{var ex__7157__auto__ = e14204;var statearr_14205_14218 = state_14186;(statearr_14205_14218[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14219 = state_14186;
state_14186 = G__14219;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_14186){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_14186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_14206 = f__7224__auto__.call(null);(statearr_14206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___14207);
return statearr_14206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7223__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_14371){var state_val_14372 = (state_14371[1]);if((state_val_14372 === 1))
{var state_14371__$1 = state_14371;var statearr_14373_14410 = state_14371__$1;(statearr_14373_14410[2] = null);
(statearr_14373_14410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 2))
{var state_14371__$1 = state_14371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14371__$1,4,in$);
} else
{if((state_val_14372 === 3))
{var inst_14369 = (state_14371[2]);var state_14371__$1 = state_14371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14371__$1,inst_14369);
} else
{if((state_val_14372 === 4))
{var inst_14317 = (state_14371[7]);var inst_14317__$1 = (state_14371[2]);var inst_14318 = (inst_14317__$1 == null);var state_14371__$1 = (function (){var statearr_14374 = state_14371;(statearr_14374[7] = inst_14317__$1);
return statearr_14374;
})();if(cljs.core.truth_(inst_14318))
{var statearr_14375_14411 = state_14371__$1;(statearr_14375_14411[1] = 5);
} else
{var statearr_14376_14412 = state_14371__$1;(statearr_14376_14412[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 5))
{var inst_14320 = cljs.core.async.close_BANG_.call(null,out);var state_14371__$1 = state_14371;var statearr_14377_14413 = state_14371__$1;(statearr_14377_14413[2] = inst_14320);
(statearr_14377_14413[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 6))
{var inst_14317 = (state_14371[7]);var inst_14322 = f.call(null,inst_14317);var inst_14327 = cljs.core.seq.call(null,inst_14322);var inst_14328 = inst_14327;var inst_14329 = null;var inst_14330 = 0;var inst_14331 = 0;var state_14371__$1 = (function (){var statearr_14378 = state_14371;(statearr_14378[8] = inst_14328);
(statearr_14378[9] = inst_14329);
(statearr_14378[10] = inst_14330);
(statearr_14378[11] = inst_14331);
return statearr_14378;
})();var statearr_14379_14414 = state_14371__$1;(statearr_14379_14414[2] = null);
(statearr_14379_14414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 7))
{var inst_14367 = (state_14371[2]);var state_14371__$1 = state_14371;var statearr_14380_14415 = state_14371__$1;(statearr_14380_14415[2] = inst_14367);
(statearr_14380_14415[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 8))
{var inst_14330 = (state_14371[10]);var inst_14331 = (state_14371[11]);var inst_14333 = (inst_14331 < inst_14330);var inst_14334 = inst_14333;var state_14371__$1 = state_14371;if(cljs.core.truth_(inst_14334))
{var statearr_14381_14416 = state_14371__$1;(statearr_14381_14416[1] = 10);
} else
{var statearr_14382_14417 = state_14371__$1;(statearr_14382_14417[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 9))
{var inst_14364 = (state_14371[2]);var state_14371__$1 = (function (){var statearr_14383 = state_14371;(statearr_14383[12] = inst_14364);
return statearr_14383;
})();var statearr_14384_14418 = state_14371__$1;(statearr_14384_14418[2] = null);
(statearr_14384_14418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 10))
{var inst_14329 = (state_14371[9]);var inst_14331 = (state_14371[11]);var inst_14336 = cljs.core._nth.call(null,inst_14329,inst_14331);var state_14371__$1 = state_14371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14371__$1,13,out,inst_14336);
} else
{if((state_val_14372 === 11))
{var inst_14328 = (state_14371[8]);var inst_14342 = (state_14371[13]);var inst_14342__$1 = cljs.core.seq.call(null,inst_14328);var state_14371__$1 = (function (){var statearr_14388 = state_14371;(statearr_14388[13] = inst_14342__$1);
return statearr_14388;
})();if(inst_14342__$1)
{var statearr_14389_14419 = state_14371__$1;(statearr_14389_14419[1] = 14);
} else
{var statearr_14390_14420 = state_14371__$1;(statearr_14390_14420[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 12))
{var inst_14362 = (state_14371[2]);var state_14371__$1 = state_14371;var statearr_14391_14421 = state_14371__$1;(statearr_14391_14421[2] = inst_14362);
(statearr_14391_14421[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 13))
{var inst_14328 = (state_14371[8]);var inst_14329 = (state_14371[9]);var inst_14330 = (state_14371[10]);var inst_14331 = (state_14371[11]);var inst_14338 = (state_14371[2]);var inst_14339 = (inst_14331 + 1);var tmp14385 = inst_14328;var tmp14386 = inst_14329;var tmp14387 = inst_14330;var inst_14328__$1 = tmp14385;var inst_14329__$1 = tmp14386;var inst_14330__$1 = tmp14387;var inst_14331__$1 = inst_14339;var state_14371__$1 = (function (){var statearr_14392 = state_14371;(statearr_14392[8] = inst_14328__$1);
(statearr_14392[9] = inst_14329__$1);
(statearr_14392[10] = inst_14330__$1);
(statearr_14392[11] = inst_14331__$1);
(statearr_14392[14] = inst_14338);
return statearr_14392;
})();var statearr_14393_14422 = state_14371__$1;(statearr_14393_14422[2] = null);
(statearr_14393_14422[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 14))
{var inst_14342 = (state_14371[13]);var inst_14344 = cljs.core.chunked_seq_QMARK_.call(null,inst_14342);var state_14371__$1 = state_14371;if(inst_14344)
{var statearr_14394_14423 = state_14371__$1;(statearr_14394_14423[1] = 17);
} else
{var statearr_14395_14424 = state_14371__$1;(statearr_14395_14424[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 15))
{var state_14371__$1 = state_14371;var statearr_14396_14425 = state_14371__$1;(statearr_14396_14425[2] = null);
(statearr_14396_14425[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 16))
{var inst_14360 = (state_14371[2]);var state_14371__$1 = state_14371;var statearr_14397_14426 = state_14371__$1;(statearr_14397_14426[2] = inst_14360);
(statearr_14397_14426[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 17))
{var inst_14342 = (state_14371[13]);var inst_14346 = cljs.core.chunk_first.call(null,inst_14342);var inst_14347 = cljs.core.chunk_rest.call(null,inst_14342);var inst_14348 = cljs.core.count.call(null,inst_14346);var inst_14328 = inst_14347;var inst_14329 = inst_14346;var inst_14330 = inst_14348;var inst_14331 = 0;var state_14371__$1 = (function (){var statearr_14398 = state_14371;(statearr_14398[8] = inst_14328);
(statearr_14398[9] = inst_14329);
(statearr_14398[10] = inst_14330);
(statearr_14398[11] = inst_14331);
return statearr_14398;
})();var statearr_14399_14427 = state_14371__$1;(statearr_14399_14427[2] = null);
(statearr_14399_14427[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 18))
{var inst_14342 = (state_14371[13]);var inst_14351 = cljs.core.first.call(null,inst_14342);var state_14371__$1 = state_14371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14371__$1,20,out,inst_14351);
} else
{if((state_val_14372 === 19))
{var inst_14357 = (state_14371[2]);var state_14371__$1 = state_14371;var statearr_14400_14428 = state_14371__$1;(statearr_14400_14428[2] = inst_14357);
(statearr_14400_14428[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14372 === 20))
{var inst_14342 = (state_14371[13]);var inst_14353 = (state_14371[2]);var inst_14354 = cljs.core.next.call(null,inst_14342);var inst_14328 = inst_14354;var inst_14329 = null;var inst_14330 = 0;var inst_14331 = 0;var state_14371__$1 = (function (){var statearr_14401 = state_14371;(statearr_14401[8] = inst_14328);
(statearr_14401[9] = inst_14329);
(statearr_14401[10] = inst_14330);
(statearr_14401[11] = inst_14331);
(statearr_14401[15] = inst_14353);
return statearr_14401;
})();var statearr_14402_14429 = state_14371__$1;(statearr_14402_14429[2] = null);
(statearr_14402_14429[1] = 8);
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
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_14406 = (new Array(16));(statearr_14406[0] = state_machine__7154__auto__);
(statearr_14406[1] = 1);
return statearr_14406;
});
var state_machine__7154__auto____1 = (function (state_14371){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_14371);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e14407){if((e14407 instanceof Object))
{var ex__7157__auto__ = e14407;var statearr_14408_14430 = state_14371;(statearr_14408_14430[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14431 = state_14371;
state_14371 = G__14431;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_14371){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_14371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_14409 = f__7224__auto__.call(null);(statearr_14409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto__);
return statearr_14409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return c__7223__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7223__auto___14512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_14491){var state_val_14492 = (state_14491[1]);if((state_val_14492 === 1))
{var state_14491__$1 = state_14491;var statearr_14493_14513 = state_14491__$1;(statearr_14493_14513[2] = null);
(statearr_14493_14513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 2))
{var state_14491__$1 = state_14491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14491__$1,4,from);
} else
{if((state_val_14492 === 3))
{var inst_14489 = (state_14491[2]);var state_14491__$1 = state_14491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14491__$1,inst_14489);
} else
{if((state_val_14492 === 4))
{var inst_14474 = (state_14491[7]);var inst_14474__$1 = (state_14491[2]);var inst_14475 = (inst_14474__$1 == null);var state_14491__$1 = (function (){var statearr_14494 = state_14491;(statearr_14494[7] = inst_14474__$1);
return statearr_14494;
})();if(cljs.core.truth_(inst_14475))
{var statearr_14495_14514 = state_14491__$1;(statearr_14495_14514[1] = 5);
} else
{var statearr_14496_14515 = state_14491__$1;(statearr_14496_14515[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 5))
{var state_14491__$1 = state_14491;if(cljs.core.truth_(close_QMARK_))
{var statearr_14497_14516 = state_14491__$1;(statearr_14497_14516[1] = 8);
} else
{var statearr_14498_14517 = state_14491__$1;(statearr_14498_14517[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 6))
{var inst_14474 = (state_14491[7]);var state_14491__$1 = state_14491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14491__$1,11,to,inst_14474);
} else
{if((state_val_14492 === 7))
{var inst_14487 = (state_14491[2]);var state_14491__$1 = state_14491;var statearr_14499_14518 = state_14491__$1;(statearr_14499_14518[2] = inst_14487);
(statearr_14499_14518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 8))
{var inst_14478 = cljs.core.async.close_BANG_.call(null,to);var state_14491__$1 = state_14491;var statearr_14500_14519 = state_14491__$1;(statearr_14500_14519[2] = inst_14478);
(statearr_14500_14519[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 9))
{var state_14491__$1 = state_14491;var statearr_14501_14520 = state_14491__$1;(statearr_14501_14520[2] = null);
(statearr_14501_14520[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 10))
{var inst_14481 = (state_14491[2]);var state_14491__$1 = state_14491;var statearr_14502_14521 = state_14491__$1;(statearr_14502_14521[2] = inst_14481);
(statearr_14502_14521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14492 === 11))
{var inst_14484 = (state_14491[2]);var state_14491__$1 = (function (){var statearr_14503 = state_14491;(statearr_14503[8] = inst_14484);
return statearr_14503;
})();var statearr_14504_14522 = state_14491__$1;(statearr_14504_14522[2] = null);
(statearr_14504_14522[1] = 2);
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
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_14508 = (new Array(9));(statearr_14508[0] = state_machine__7154__auto__);
(statearr_14508[1] = 1);
return statearr_14508;
});
var state_machine__7154__auto____1 = (function (state_14491){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_14491);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e14509){if((e14509 instanceof Object))
{var ex__7157__auto__ = e14509;var statearr_14510_14523 = state_14491;(statearr_14510_14523[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14524 = state_14491;
state_14491 = G__14524;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_14491){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_14491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_14511 = f__7224__auto__.call(null);(statearr_14511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___14512);
return statearr_14511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7223__auto___14611 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_14589){var state_val_14590 = (state_14589[1]);if((state_val_14590 === 1))
{var state_14589__$1 = state_14589;var statearr_14591_14612 = state_14589__$1;(statearr_14591_14612[2] = null);
(statearr_14591_14612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 2))
{var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14589__$1,4,ch);
} else
{if((state_val_14590 === 3))
{var inst_14587 = (state_14589[2]);var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14589__$1,inst_14587);
} else
{if((state_val_14590 === 4))
{var inst_14570 = (state_14589[7]);var inst_14570__$1 = (state_14589[2]);var inst_14571 = (inst_14570__$1 == null);var state_14589__$1 = (function (){var statearr_14592 = state_14589;(statearr_14592[7] = inst_14570__$1);
return statearr_14592;
})();if(cljs.core.truth_(inst_14571))
{var statearr_14593_14613 = state_14589__$1;(statearr_14593_14613[1] = 5);
} else
{var statearr_14594_14614 = state_14589__$1;(statearr_14594_14614[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 5))
{var inst_14573 = cljs.core.async.close_BANG_.call(null,tc);var inst_14574 = cljs.core.async.close_BANG_.call(null,fc);var state_14589__$1 = (function (){var statearr_14595 = state_14589;(statearr_14595[8] = inst_14573);
return statearr_14595;
})();var statearr_14596_14615 = state_14589__$1;(statearr_14596_14615[2] = inst_14574);
(statearr_14596_14615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 6))
{var inst_14570 = (state_14589[7]);var inst_14576 = p.call(null,inst_14570);var state_14589__$1 = state_14589;if(cljs.core.truth_(inst_14576))
{var statearr_14597_14616 = state_14589__$1;(statearr_14597_14616[1] = 9);
} else
{var statearr_14598_14617 = state_14589__$1;(statearr_14598_14617[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 7))
{var inst_14585 = (state_14589[2]);var state_14589__$1 = state_14589;var statearr_14599_14618 = state_14589__$1;(statearr_14599_14618[2] = inst_14585);
(statearr_14599_14618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 8))
{var inst_14582 = (state_14589[2]);var state_14589__$1 = (function (){var statearr_14600 = state_14589;(statearr_14600[9] = inst_14582);
return statearr_14600;
})();var statearr_14601_14619 = state_14589__$1;(statearr_14601_14619[2] = null);
(statearr_14601_14619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 9))
{var state_14589__$1 = state_14589;var statearr_14602_14620 = state_14589__$1;(statearr_14602_14620[2] = tc);
(statearr_14602_14620[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 10))
{var state_14589__$1 = state_14589;var statearr_14603_14621 = state_14589__$1;(statearr_14603_14621[2] = fc);
(statearr_14603_14621[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14590 === 11))
{var inst_14570 = (state_14589[7]);var inst_14580 = (state_14589[2]);var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14589__$1,8,inst_14580,inst_14570);
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
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_14607 = (new Array(10));(statearr_14607[0] = state_machine__7154__auto__);
(statearr_14607[1] = 1);
return statearr_14607;
});
var state_machine__7154__auto____1 = (function (state_14589){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_14589);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e14608){if((e14608 instanceof Object))
{var ex__7157__auto__ = e14608;var statearr_14609_14622 = state_14589;(statearr_14609_14622[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14623 = state_14589;
state_14589 = G__14623;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_14589){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_14589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_14610 = f__7224__auto__.call(null);(statearr_14610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___14611);
return statearr_14610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7223__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_14670){var state_val_14671 = (state_14670[1]);if((state_val_14671 === 7))
{var inst_14666 = (state_14670[2]);var state_14670__$1 = state_14670;var statearr_14672_14688 = state_14670__$1;(statearr_14672_14688[2] = inst_14666);
(statearr_14672_14688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 6))
{var inst_14656 = (state_14670[7]);var inst_14659 = (state_14670[8]);var inst_14663 = f.call(null,inst_14656,inst_14659);var inst_14656__$1 = inst_14663;var state_14670__$1 = (function (){var statearr_14673 = state_14670;(statearr_14673[7] = inst_14656__$1);
return statearr_14673;
})();var statearr_14674_14689 = state_14670__$1;(statearr_14674_14689[2] = null);
(statearr_14674_14689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 5))
{var inst_14656 = (state_14670[7]);var state_14670__$1 = state_14670;var statearr_14675_14690 = state_14670__$1;(statearr_14675_14690[2] = inst_14656);
(statearr_14675_14690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 4))
{var inst_14659 = (state_14670[8]);var inst_14659__$1 = (state_14670[2]);var inst_14660 = (inst_14659__$1 == null);var state_14670__$1 = (function (){var statearr_14676 = state_14670;(statearr_14676[8] = inst_14659__$1);
return statearr_14676;
})();if(cljs.core.truth_(inst_14660))
{var statearr_14677_14691 = state_14670__$1;(statearr_14677_14691[1] = 5);
} else
{var statearr_14678_14692 = state_14670__$1;(statearr_14678_14692[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 3))
{var inst_14668 = (state_14670[2]);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14670__$1,inst_14668);
} else
{if((state_val_14671 === 2))
{var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14670__$1,4,ch);
} else
{if((state_val_14671 === 1))
{var inst_14656 = init;var state_14670__$1 = (function (){var statearr_14679 = state_14670;(statearr_14679[7] = inst_14656);
return statearr_14679;
})();var statearr_14680_14693 = state_14670__$1;(statearr_14680_14693[2] = null);
(statearr_14680_14693[1] = 2);
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
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_14684 = (new Array(9));(statearr_14684[0] = state_machine__7154__auto__);
(statearr_14684[1] = 1);
return statearr_14684;
});
var state_machine__7154__auto____1 = (function (state_14670){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_14670);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e14685){if((e14685 instanceof Object))
{var ex__7157__auto__ = e14685;var statearr_14686_14694 = state_14670;(statearr_14686_14694[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14695 = state_14670;
state_14670 = G__14695;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_14670){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_14670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_14687 = f__7224__auto__.call(null);(statearr_14687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto__);
return statearr_14687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return c__7223__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7223__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_14757){var state_val_14758 = (state_14757[1]);if((state_val_14758 === 1))
{var inst_14737 = cljs.core.seq.call(null,coll);var inst_14738 = inst_14737;var state_14757__$1 = (function (){var statearr_14759 = state_14757;(statearr_14759[7] = inst_14738);
return statearr_14759;
})();var statearr_14760_14778 = state_14757__$1;(statearr_14760_14778[2] = null);
(statearr_14760_14778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 2))
{var inst_14738 = (state_14757[7]);var state_14757__$1 = state_14757;if(cljs.core.truth_(inst_14738))
{var statearr_14761_14779 = state_14757__$1;(statearr_14761_14779[1] = 4);
} else
{var statearr_14762_14780 = state_14757__$1;(statearr_14762_14780[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 3))
{var inst_14755 = (state_14757[2]);var state_14757__$1 = state_14757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14757__$1,inst_14755);
} else
{if((state_val_14758 === 4))
{var inst_14738 = (state_14757[7]);var inst_14741 = cljs.core.first.call(null,inst_14738);var state_14757__$1 = state_14757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14757__$1,7,ch,inst_14741);
} else
{if((state_val_14758 === 5))
{var state_14757__$1 = state_14757;if(cljs.core.truth_(close_QMARK_))
{var statearr_14763_14781 = state_14757__$1;(statearr_14763_14781[1] = 8);
} else
{var statearr_14764_14782 = state_14757__$1;(statearr_14764_14782[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 6))
{var inst_14753 = (state_14757[2]);var state_14757__$1 = state_14757;var statearr_14765_14783 = state_14757__$1;(statearr_14765_14783[2] = inst_14753);
(statearr_14765_14783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 7))
{var inst_14738 = (state_14757[7]);var inst_14743 = (state_14757[2]);var inst_14744 = cljs.core.next.call(null,inst_14738);var inst_14738__$1 = inst_14744;var state_14757__$1 = (function (){var statearr_14766 = state_14757;(statearr_14766[7] = inst_14738__$1);
(statearr_14766[8] = inst_14743);
return statearr_14766;
})();var statearr_14767_14784 = state_14757__$1;(statearr_14767_14784[2] = null);
(statearr_14767_14784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 8))
{var inst_14748 = cljs.core.async.close_BANG_.call(null,ch);var state_14757__$1 = state_14757;var statearr_14768_14785 = state_14757__$1;(statearr_14768_14785[2] = inst_14748);
(statearr_14768_14785[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 9))
{var state_14757__$1 = state_14757;var statearr_14769_14786 = state_14757__$1;(statearr_14769_14786[2] = null);
(statearr_14769_14786[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14758 === 10))
{var inst_14751 = (state_14757[2]);var state_14757__$1 = state_14757;var statearr_14770_14787 = state_14757__$1;(statearr_14770_14787[2] = inst_14751);
(statearr_14770_14787[1] = 6);
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
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_14774 = (new Array(9));(statearr_14774[0] = state_machine__7154__auto__);
(statearr_14774[1] = 1);
return statearr_14774;
});
var state_machine__7154__auto____1 = (function (state_14757){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_14757);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e14775){if((e14775 instanceof Object))
{var ex__7157__auto__ = e14775;var statearr_14776_14788 = state_14757;(statearr_14776_14788[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14789 = state_14757;
state_14757 = G__14789;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_14757){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_14757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_14777 = f__7224__auto__.call(null);(statearr_14777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto__);
return statearr_14777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return c__7223__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3124__auto__ = _;if(and__3124__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3729__auto__ = (((_ == null))?null:_);return (function (){var or__3133__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15004 = (function (cs,ch,mult,meta15005){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15005 = meta15005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15004.cljs$lang$type = true;
cljs.core.async.t15004.cljs$lang$ctorStr = "cljs.core.async/t15004";
cljs.core.async.t15004.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15004");
});})(cs))
;
cljs.core.async.t15004.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15004.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15006){var self__ = this;
var _15006__$1 = this;return self__.meta15005;
});})(cs))
;
cljs.core.async.t15004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15006,meta15005__$1){var self__ = this;
var _15006__$1 = this;return (new cljs.core.async.t15004(self__.cs,self__.ch,self__.mult,meta15005__$1));
});})(cs))
;
cljs.core.async.__GT_t15004 = ((function (cs){
return (function __GT_t15004(cs__$1,ch__$1,mult__$1,meta15005){return (new cljs.core.async.t15004(cs__$1,ch__$1,mult__$1,meta15005));
});})(cs))
;
}
return (new cljs.core.async.t15004(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7223__auto___15218 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_15136){var state_val_15137 = (state_15136[1]);if((state_val_15137 === 32))
{var inst_15009 = (state_15136[7]);var inst_15085 = (state_15136[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15136,31,Object,null,30);var inst_15092 = cljs.core.async.put_BANG_.call(null,inst_15085,inst_15009,done);var state_15136__$1 = state_15136;var statearr_15138_15219 = state_15136__$1;(statearr_15138_15219[2] = inst_15092);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 1))
{var state_15136__$1 = state_15136;var statearr_15139_15220 = state_15136__$1;(statearr_15139_15220[2] = null);
(statearr_15139_15220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 33))
{var inst_15098 = (state_15136[9]);var inst_15100 = cljs.core.chunked_seq_QMARK_.call(null,inst_15098);var state_15136__$1 = state_15136;if(inst_15100)
{var statearr_15140_15221 = state_15136__$1;(statearr_15140_15221[1] = 36);
} else
{var statearr_15141_15222 = state_15136__$1;(statearr_15141_15222[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 2))
{var state_15136__$1 = state_15136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15136__$1,4,ch);
} else
{if((state_val_15137 === 34))
{var state_15136__$1 = state_15136;var statearr_15142_15223 = state_15136__$1;(statearr_15142_15223[2] = null);
(statearr_15142_15223[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 3))
{var inst_15134 = (state_15136[2]);var state_15136__$1 = state_15136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15136__$1,inst_15134);
} else
{if((state_val_15137 === 35))
{var inst_15123 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15143_15224 = state_15136__$1;(statearr_15143_15224[2] = inst_15123);
(statearr_15143_15224[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 4))
{var inst_15009 = (state_15136[7]);var inst_15009__$1 = (state_15136[2]);var inst_15010 = (inst_15009__$1 == null);var state_15136__$1 = (function (){var statearr_15144 = state_15136;(statearr_15144[7] = inst_15009__$1);
return statearr_15144;
})();if(cljs.core.truth_(inst_15010))
{var statearr_15145_15225 = state_15136__$1;(statearr_15145_15225[1] = 5);
} else
{var statearr_15146_15226 = state_15136__$1;(statearr_15146_15226[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 36))
{var inst_15098 = (state_15136[9]);var inst_15102 = cljs.core.chunk_first.call(null,inst_15098);var inst_15103 = cljs.core.chunk_rest.call(null,inst_15098);var inst_15104 = cljs.core.count.call(null,inst_15102);var inst_15077 = inst_15103;var inst_15078 = inst_15102;var inst_15079 = inst_15104;var inst_15080 = 0;var state_15136__$1 = (function (){var statearr_15147 = state_15136;(statearr_15147[10] = inst_15080);
(statearr_15147[11] = inst_15078);
(statearr_15147[12] = inst_15079);
(statearr_15147[13] = inst_15077);
return statearr_15147;
})();var statearr_15148_15227 = state_15136__$1;(statearr_15148_15227[2] = null);
(statearr_15148_15227[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 5))
{var inst_15016 = cljs.core.deref.call(null,cs);var inst_15017 = cljs.core.seq.call(null,inst_15016);var inst_15018 = inst_15017;var inst_15019 = null;var inst_15020 = 0;var inst_15021 = 0;var state_15136__$1 = (function (){var statearr_15149 = state_15136;(statearr_15149[14] = inst_15019);
(statearr_15149[15] = inst_15020);
(statearr_15149[16] = inst_15018);
(statearr_15149[17] = inst_15021);
return statearr_15149;
})();var statearr_15150_15228 = state_15136__$1;(statearr_15150_15228[2] = null);
(statearr_15150_15228[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 37))
{var inst_15098 = (state_15136[9]);var inst_15107 = cljs.core.first.call(null,inst_15098);var state_15136__$1 = (function (){var statearr_15151 = state_15136;(statearr_15151[18] = inst_15107);
return statearr_15151;
})();var statearr_15152_15229 = state_15136__$1;(statearr_15152_15229[2] = null);
(statearr_15152_15229[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 6))
{var inst_15068 = cljs.core.deref.call(null,cs);var inst_15069 = cljs.core.keys.call(null,inst_15068);var inst_15070 = cljs.core.count.call(null,inst_15069);var inst_15071 = cljs.core.reset_BANG_.call(null,dctr,inst_15070);var inst_15076 = cljs.core.seq.call(null,inst_15069);var inst_15077 = inst_15076;var inst_15078 = null;var inst_15079 = 0;var inst_15080 = 0;var state_15136__$1 = (function (){var statearr_15153 = state_15136;(statearr_15153[10] = inst_15080);
(statearr_15153[19] = inst_15071);
(statearr_15153[11] = inst_15078);
(statearr_15153[12] = inst_15079);
(statearr_15153[13] = inst_15077);
return statearr_15153;
})();var statearr_15154_15230 = state_15136__$1;(statearr_15154_15230[2] = null);
(statearr_15154_15230[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 38))
{var inst_15120 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15155_15231 = state_15136__$1;(statearr_15155_15231[2] = inst_15120);
(statearr_15155_15231[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 7))
{var inst_15132 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15156_15232 = state_15136__$1;(statearr_15156_15232[2] = inst_15132);
(statearr_15156_15232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 39))
{var inst_15098 = (state_15136[9]);var inst_15116 = (state_15136[2]);var inst_15117 = cljs.core.next.call(null,inst_15098);var inst_15077 = inst_15117;var inst_15078 = null;var inst_15079 = 0;var inst_15080 = 0;var state_15136__$1 = (function (){var statearr_15157 = state_15136;(statearr_15157[10] = inst_15080);
(statearr_15157[11] = inst_15078);
(statearr_15157[12] = inst_15079);
(statearr_15157[13] = inst_15077);
(statearr_15157[20] = inst_15116);
return statearr_15157;
})();var statearr_15158_15233 = state_15136__$1;(statearr_15158_15233[2] = null);
(statearr_15158_15233[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 8))
{var inst_15020 = (state_15136[15]);var inst_15021 = (state_15136[17]);var inst_15023 = (inst_15021 < inst_15020);var inst_15024 = inst_15023;var state_15136__$1 = state_15136;if(cljs.core.truth_(inst_15024))
{var statearr_15159_15234 = state_15136__$1;(statearr_15159_15234[1] = 10);
} else
{var statearr_15160_15235 = state_15136__$1;(statearr_15160_15235[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 40))
{var inst_15107 = (state_15136[18]);var inst_15108 = (state_15136[2]);var inst_15109 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15110 = cljs.core.async.untap_STAR_.call(null,m,inst_15107);var state_15136__$1 = (function (){var statearr_15161 = state_15136;(statearr_15161[21] = inst_15108);
(statearr_15161[22] = inst_15109);
return statearr_15161;
})();var statearr_15162_15236 = state_15136__$1;(statearr_15162_15236[2] = inst_15110);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 9))
{var inst_15066 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15163_15237 = state_15136__$1;(statearr_15163_15237[2] = inst_15066);
(statearr_15163_15237[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 41))
{var inst_15107 = (state_15136[18]);var inst_15009 = (state_15136[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15136,40,Object,null,39);var inst_15114 = cljs.core.async.put_BANG_.call(null,inst_15107,inst_15009,done);var state_15136__$1 = state_15136;var statearr_15164_15238 = state_15136__$1;(statearr_15164_15238[2] = inst_15114);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 10))
{var inst_15019 = (state_15136[14]);var inst_15021 = (state_15136[17]);var inst_15027 = cljs.core._nth.call(null,inst_15019,inst_15021);var inst_15028 = cljs.core.nth.call(null,inst_15027,0,null);var inst_15029 = cljs.core.nth.call(null,inst_15027,1,null);var state_15136__$1 = (function (){var statearr_15165 = state_15136;(statearr_15165[23] = inst_15028);
return statearr_15165;
})();if(cljs.core.truth_(inst_15029))
{var statearr_15166_15239 = state_15136__$1;(statearr_15166_15239[1] = 13);
} else
{var statearr_15167_15240 = state_15136__$1;(statearr_15167_15240[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 42))
{var inst_15129 = (state_15136[2]);var state_15136__$1 = (function (){var statearr_15168 = state_15136;(statearr_15168[24] = inst_15129);
return statearr_15168;
})();var statearr_15169_15241 = state_15136__$1;(statearr_15169_15241[2] = null);
(statearr_15169_15241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 11))
{var inst_15018 = (state_15136[16]);var inst_15038 = (state_15136[25]);var inst_15038__$1 = cljs.core.seq.call(null,inst_15018);var state_15136__$1 = (function (){var statearr_15170 = state_15136;(statearr_15170[25] = inst_15038__$1);
return statearr_15170;
})();if(inst_15038__$1)
{var statearr_15171_15242 = state_15136__$1;(statearr_15171_15242[1] = 16);
} else
{var statearr_15172_15243 = state_15136__$1;(statearr_15172_15243[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 12))
{var inst_15064 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15173_15244 = state_15136__$1;(statearr_15173_15244[2] = inst_15064);
(statearr_15173_15244[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 13))
{var inst_15028 = (state_15136[23]);var inst_15031 = cljs.core.async.close_BANG_.call(null,inst_15028);var state_15136__$1 = state_15136;var statearr_15177_15245 = state_15136__$1;(statearr_15177_15245[2] = inst_15031);
(statearr_15177_15245[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 14))
{var state_15136__$1 = state_15136;var statearr_15178_15246 = state_15136__$1;(statearr_15178_15246[2] = null);
(statearr_15178_15246[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 15))
{var inst_15019 = (state_15136[14]);var inst_15020 = (state_15136[15]);var inst_15018 = (state_15136[16]);var inst_15021 = (state_15136[17]);var inst_15034 = (state_15136[2]);var inst_15035 = (inst_15021 + 1);var tmp15174 = inst_15019;var tmp15175 = inst_15020;var tmp15176 = inst_15018;var inst_15018__$1 = tmp15176;var inst_15019__$1 = tmp15174;var inst_15020__$1 = tmp15175;var inst_15021__$1 = inst_15035;var state_15136__$1 = (function (){var statearr_15179 = state_15136;(statearr_15179[14] = inst_15019__$1);
(statearr_15179[15] = inst_15020__$1);
(statearr_15179[16] = inst_15018__$1);
(statearr_15179[17] = inst_15021__$1);
(statearr_15179[26] = inst_15034);
return statearr_15179;
})();var statearr_15180_15247 = state_15136__$1;(statearr_15180_15247[2] = null);
(statearr_15180_15247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 16))
{var inst_15038 = (state_15136[25]);var inst_15040 = cljs.core.chunked_seq_QMARK_.call(null,inst_15038);var state_15136__$1 = state_15136;if(inst_15040)
{var statearr_15181_15248 = state_15136__$1;(statearr_15181_15248[1] = 19);
} else
{var statearr_15182_15249 = state_15136__$1;(statearr_15182_15249[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 17))
{var state_15136__$1 = state_15136;var statearr_15183_15250 = state_15136__$1;(statearr_15183_15250[2] = null);
(statearr_15183_15250[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 18))
{var inst_15062 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15184_15251 = state_15136__$1;(statearr_15184_15251[2] = inst_15062);
(statearr_15184_15251[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 19))
{var inst_15038 = (state_15136[25]);var inst_15042 = cljs.core.chunk_first.call(null,inst_15038);var inst_15043 = cljs.core.chunk_rest.call(null,inst_15038);var inst_15044 = cljs.core.count.call(null,inst_15042);var inst_15018 = inst_15043;var inst_15019 = inst_15042;var inst_15020 = inst_15044;var inst_15021 = 0;var state_15136__$1 = (function (){var statearr_15185 = state_15136;(statearr_15185[14] = inst_15019);
(statearr_15185[15] = inst_15020);
(statearr_15185[16] = inst_15018);
(statearr_15185[17] = inst_15021);
return statearr_15185;
})();var statearr_15186_15252 = state_15136__$1;(statearr_15186_15252[2] = null);
(statearr_15186_15252[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 20))
{var inst_15038 = (state_15136[25]);var inst_15048 = cljs.core.first.call(null,inst_15038);var inst_15049 = cljs.core.nth.call(null,inst_15048,0,null);var inst_15050 = cljs.core.nth.call(null,inst_15048,1,null);var state_15136__$1 = (function (){var statearr_15187 = state_15136;(statearr_15187[27] = inst_15049);
return statearr_15187;
})();if(cljs.core.truth_(inst_15050))
{var statearr_15188_15253 = state_15136__$1;(statearr_15188_15253[1] = 22);
} else
{var statearr_15189_15254 = state_15136__$1;(statearr_15189_15254[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 21))
{var inst_15059 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15190_15255 = state_15136__$1;(statearr_15190_15255[2] = inst_15059);
(statearr_15190_15255[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 22))
{var inst_15049 = (state_15136[27]);var inst_15052 = cljs.core.async.close_BANG_.call(null,inst_15049);var state_15136__$1 = state_15136;var statearr_15191_15256 = state_15136__$1;(statearr_15191_15256[2] = inst_15052);
(statearr_15191_15256[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 23))
{var state_15136__$1 = state_15136;var statearr_15192_15257 = state_15136__$1;(statearr_15192_15257[2] = null);
(statearr_15192_15257[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 24))
{var inst_15038 = (state_15136[25]);var inst_15055 = (state_15136[2]);var inst_15056 = cljs.core.next.call(null,inst_15038);var inst_15018 = inst_15056;var inst_15019 = null;var inst_15020 = 0;var inst_15021 = 0;var state_15136__$1 = (function (){var statearr_15193 = state_15136;(statearr_15193[28] = inst_15055);
(statearr_15193[14] = inst_15019);
(statearr_15193[15] = inst_15020);
(statearr_15193[16] = inst_15018);
(statearr_15193[17] = inst_15021);
return statearr_15193;
})();var statearr_15194_15258 = state_15136__$1;(statearr_15194_15258[2] = null);
(statearr_15194_15258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 25))
{var inst_15080 = (state_15136[10]);var inst_15079 = (state_15136[12]);var inst_15082 = (inst_15080 < inst_15079);var inst_15083 = inst_15082;var state_15136__$1 = state_15136;if(cljs.core.truth_(inst_15083))
{var statearr_15195_15259 = state_15136__$1;(statearr_15195_15259[1] = 27);
} else
{var statearr_15196_15260 = state_15136__$1;(statearr_15196_15260[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 26))
{var inst_15127 = (state_15136[2]);var state_15136__$1 = (function (){var statearr_15197 = state_15136;(statearr_15197[29] = inst_15127);
return statearr_15197;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15136__$1,42,dchan);
} else
{if((state_val_15137 === 27))
{var inst_15080 = (state_15136[10]);var inst_15078 = (state_15136[11]);var inst_15085 = cljs.core._nth.call(null,inst_15078,inst_15080);var state_15136__$1 = (function (){var statearr_15198 = state_15136;(statearr_15198[8] = inst_15085);
return statearr_15198;
})();var statearr_15199_15261 = state_15136__$1;(statearr_15199_15261[2] = null);
(statearr_15199_15261[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 28))
{var inst_15098 = (state_15136[9]);var inst_15077 = (state_15136[13]);var inst_15098__$1 = cljs.core.seq.call(null,inst_15077);var state_15136__$1 = (function (){var statearr_15203 = state_15136;(statearr_15203[9] = inst_15098__$1);
return statearr_15203;
})();if(inst_15098__$1)
{var statearr_15204_15262 = state_15136__$1;(statearr_15204_15262[1] = 33);
} else
{var statearr_15205_15263 = state_15136__$1;(statearr_15205_15263[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 29))
{var inst_15125 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15206_15264 = state_15136__$1;(statearr_15206_15264[2] = inst_15125);
(statearr_15206_15264[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 30))
{var inst_15080 = (state_15136[10]);var inst_15078 = (state_15136[11]);var inst_15079 = (state_15136[12]);var inst_15077 = (state_15136[13]);var inst_15094 = (state_15136[2]);var inst_15095 = (inst_15080 + 1);var tmp15200 = inst_15078;var tmp15201 = inst_15079;var tmp15202 = inst_15077;var inst_15077__$1 = tmp15202;var inst_15078__$1 = tmp15200;var inst_15079__$1 = tmp15201;var inst_15080__$1 = inst_15095;var state_15136__$1 = (function (){var statearr_15207 = state_15136;(statearr_15207[10] = inst_15080__$1);
(statearr_15207[11] = inst_15078__$1);
(statearr_15207[12] = inst_15079__$1);
(statearr_15207[13] = inst_15077__$1);
(statearr_15207[30] = inst_15094);
return statearr_15207;
})();var statearr_15208_15265 = state_15136__$1;(statearr_15208_15265[2] = null);
(statearr_15208_15265[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 31))
{var inst_15085 = (state_15136[8]);var inst_15086 = (state_15136[2]);var inst_15087 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15088 = cljs.core.async.untap_STAR_.call(null,m,inst_15085);var state_15136__$1 = (function (){var statearr_15209 = state_15136;(statearr_15209[31] = inst_15086);
(statearr_15209[32] = inst_15087);
return statearr_15209;
})();var statearr_15210_15266 = state_15136__$1;(statearr_15210_15266[2] = inst_15088);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_15214 = (new Array(33));(statearr_15214[0] = state_machine__7154__auto__);
(statearr_15214[1] = 1);
return statearr_15214;
});
var state_machine__7154__auto____1 = (function (state_15136){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_15136);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object))
{var ex__7157__auto__ = e15215;var statearr_15216_15267 = state_15136;(statearr_15216_15267[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15268 = state_15136;
state_15136 = G__15268;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_15217 = f__7224__auto__.call(null);(statearr_15217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___15218);
return statearr_15217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15378 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15379){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15379 = meta15379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15378.cljs$lang$type = true;
cljs.core.async.t15378.cljs$lang$ctorStr = "cljs.core.async/t15378";
cljs.core.async.t15378.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15378");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15380){var self__ = this;
var _15380__$1 = this;return self__.meta15379;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15380,meta15379__$1){var self__ = this;
var _15380__$1 = this;return (new cljs.core.async.t15378(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15379__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15378 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15378(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15379){return (new cljs.core.async.t15378(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15379));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15378(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7223__auto___15487 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_15445){var state_val_15446 = (state_15445[1]);if((state_val_15446 === 1))
{var inst_15384 = (state_15445[7]);var inst_15384__$1 = calc_state.call(null);var inst_15385 = cljs.core.seq_QMARK_.call(null,inst_15384__$1);var state_15445__$1 = (function (){var statearr_15447 = state_15445;(statearr_15447[7] = inst_15384__$1);
return statearr_15447;
})();if(inst_15385)
{var statearr_15448_15488 = state_15445__$1;(statearr_15448_15488[1] = 2);
} else
{var statearr_15449_15489 = state_15445__$1;(statearr_15449_15489[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 2))
{var inst_15384 = (state_15445[7]);var inst_15387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15384);var state_15445__$1 = state_15445;var statearr_15450_15490 = state_15445__$1;(statearr_15450_15490[2] = inst_15387);
(statearr_15450_15490[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 3))
{var inst_15384 = (state_15445[7]);var state_15445__$1 = state_15445;var statearr_15451_15491 = state_15445__$1;(statearr_15451_15491[2] = inst_15384);
(statearr_15451_15491[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 4))
{var inst_15384 = (state_15445[7]);var inst_15390 = (state_15445[2]);var inst_15391 = cljs.core.get.call(null,inst_15390,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15392 = cljs.core.get.call(null,inst_15390,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15393 = cljs.core.get.call(null,inst_15390,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15394 = inst_15384;var state_15445__$1 = (function (){var statearr_15452 = state_15445;(statearr_15452[8] = inst_15391);
(statearr_15452[9] = inst_15392);
(statearr_15452[10] = inst_15394);
(statearr_15452[11] = inst_15393);
return statearr_15452;
})();var statearr_15453_15492 = state_15445__$1;(statearr_15453_15492[2] = null);
(statearr_15453_15492[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 5))
{var inst_15394 = (state_15445[10]);var inst_15397 = cljs.core.seq_QMARK_.call(null,inst_15394);var state_15445__$1 = state_15445;if(inst_15397)
{var statearr_15454_15493 = state_15445__$1;(statearr_15454_15493[1] = 7);
} else
{var statearr_15455_15494 = state_15445__$1;(statearr_15455_15494[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 6))
{var inst_15443 = (state_15445[2]);var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15445__$1,inst_15443);
} else
{if((state_val_15446 === 7))
{var inst_15394 = (state_15445[10]);var inst_15399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15394);var state_15445__$1 = state_15445;var statearr_15456_15495 = state_15445__$1;(statearr_15456_15495[2] = inst_15399);
(statearr_15456_15495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 8))
{var inst_15394 = (state_15445[10]);var state_15445__$1 = state_15445;var statearr_15457_15496 = state_15445__$1;(statearr_15457_15496[2] = inst_15394);
(statearr_15457_15496[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 9))
{var inst_15402 = (state_15445[12]);var inst_15402__$1 = (state_15445[2]);var inst_15403 = cljs.core.get.call(null,inst_15402__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15404 = cljs.core.get.call(null,inst_15402__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15405 = cljs.core.get.call(null,inst_15402__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15445__$1 = (function (){var statearr_15458 = state_15445;(statearr_15458[13] = inst_15405);
(statearr_15458[14] = inst_15404);
(statearr_15458[12] = inst_15402__$1);
return statearr_15458;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15445__$1,10,inst_15403);
} else
{if((state_val_15446 === 10))
{var inst_15410 = (state_15445[15]);var inst_15409 = (state_15445[16]);var inst_15408 = (state_15445[2]);var inst_15409__$1 = cljs.core.nth.call(null,inst_15408,0,null);var inst_15410__$1 = cljs.core.nth.call(null,inst_15408,1,null);var inst_15411 = (inst_15409__$1 == null);var inst_15412 = cljs.core._EQ_.call(null,inst_15410__$1,change);var inst_15413 = (inst_15411) || (inst_15412);var state_15445__$1 = (function (){var statearr_15459 = state_15445;(statearr_15459[15] = inst_15410__$1);
(statearr_15459[16] = inst_15409__$1);
return statearr_15459;
})();if(cljs.core.truth_(inst_15413))
{var statearr_15460_15497 = state_15445__$1;(statearr_15460_15497[1] = 11);
} else
{var statearr_15461_15498 = state_15445__$1;(statearr_15461_15498[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 11))
{var inst_15409 = (state_15445[16]);var inst_15415 = (inst_15409 == null);var state_15445__$1 = state_15445;if(cljs.core.truth_(inst_15415))
{var statearr_15462_15499 = state_15445__$1;(statearr_15462_15499[1] = 14);
} else
{var statearr_15463_15500 = state_15445__$1;(statearr_15463_15500[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 12))
{var inst_15410 = (state_15445[15]);var inst_15424 = (state_15445[17]);var inst_15405 = (state_15445[13]);var inst_15424__$1 = inst_15405.call(null,inst_15410);var state_15445__$1 = (function (){var statearr_15464 = state_15445;(statearr_15464[17] = inst_15424__$1);
return statearr_15464;
})();if(cljs.core.truth_(inst_15424__$1))
{var statearr_15465_15501 = state_15445__$1;(statearr_15465_15501[1] = 17);
} else
{var statearr_15466_15502 = state_15445__$1;(statearr_15466_15502[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 13))
{var inst_15441 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15467_15503 = state_15445__$1;(statearr_15467_15503[2] = inst_15441);
(statearr_15467_15503[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 14))
{var inst_15410 = (state_15445[15]);var inst_15417 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15410);var state_15445__$1 = state_15445;var statearr_15468_15504 = state_15445__$1;(statearr_15468_15504[2] = inst_15417);
(statearr_15468_15504[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 15))
{var state_15445__$1 = state_15445;var statearr_15469_15505 = state_15445__$1;(statearr_15469_15505[2] = null);
(statearr_15469_15505[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 16))
{var inst_15420 = (state_15445[2]);var inst_15421 = calc_state.call(null);var inst_15394 = inst_15421;var state_15445__$1 = (function (){var statearr_15470 = state_15445;(statearr_15470[18] = inst_15420);
(statearr_15470[10] = inst_15394);
return statearr_15470;
})();var statearr_15471_15506 = state_15445__$1;(statearr_15471_15506[2] = null);
(statearr_15471_15506[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 17))
{var inst_15424 = (state_15445[17]);var state_15445__$1 = state_15445;var statearr_15472_15507 = state_15445__$1;(statearr_15472_15507[2] = inst_15424);
(statearr_15472_15507[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 18))
{var inst_15410 = (state_15445[15]);var inst_15405 = (state_15445[13]);var inst_15404 = (state_15445[14]);var inst_15427 = cljs.core.empty_QMARK_.call(null,inst_15405);var inst_15428 = inst_15404.call(null,inst_15410);var inst_15429 = cljs.core.not.call(null,inst_15428);var inst_15430 = (inst_15427) && (inst_15429);var state_15445__$1 = state_15445;var statearr_15473_15508 = state_15445__$1;(statearr_15473_15508[2] = inst_15430);
(statearr_15473_15508[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 19))
{var inst_15432 = (state_15445[2]);var state_15445__$1 = state_15445;if(cljs.core.truth_(inst_15432))
{var statearr_15474_15509 = state_15445__$1;(statearr_15474_15509[1] = 20);
} else
{var statearr_15475_15510 = state_15445__$1;(statearr_15475_15510[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 20))
{var inst_15409 = (state_15445[16]);var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15445__$1,23,out,inst_15409);
} else
{if((state_val_15446 === 21))
{var state_15445__$1 = state_15445;var statearr_15476_15511 = state_15445__$1;(statearr_15476_15511[2] = null);
(statearr_15476_15511[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 22))
{var inst_15402 = (state_15445[12]);var inst_15438 = (state_15445[2]);var inst_15394 = inst_15402;var state_15445__$1 = (function (){var statearr_15477 = state_15445;(statearr_15477[19] = inst_15438);
(statearr_15477[10] = inst_15394);
return statearr_15477;
})();var statearr_15478_15512 = state_15445__$1;(statearr_15478_15512[2] = null);
(statearr_15478_15512[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 23))
{var inst_15435 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15479_15513 = state_15445__$1;(statearr_15479_15513[2] = inst_15435);
(statearr_15479_15513[1] = 22);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_15483 = (new Array(20));(statearr_15483[0] = state_machine__7154__auto__);
(statearr_15483[1] = 1);
return statearr_15483;
});
var state_machine__7154__auto____1 = (function (state_15445){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_15445);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e15484){if((e15484 instanceof Object))
{var ex__7157__auto__ = e15484;var statearr_15485_15514 = state_15445;(statearr_15485_15514[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15515 = state_15445;
state_15445 = G__15515;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_15445){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_15445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_15486 = f__7224__auto__.call(null);(statearr_15486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___15487);
return statearr_15486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3133__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3133__auto__,mults){
return (function (p1__15516_SHARP_){if(cljs.core.truth_(p1__15516_SHARP_.call(null,topic)))
{return p1__15516_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15516_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3133__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15641 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15642){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15642 = meta15642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15641.cljs$lang$type = true;
cljs.core.async.t15641.cljs$lang$ctorStr = "cljs.core.async/t15641";
cljs.core.async.t15641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15641");
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15643){var self__ = this;
var _15643__$1 = this;return self__.meta15642;
});})(mults,ensure_mult))
;
cljs.core.async.t15641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15643,meta15642__$1){var self__ = this;
var _15643__$1 = this;return (new cljs.core.async.t15641(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15642__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15641 = ((function (mults,ensure_mult){
return (function __GT_t15641(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15642){return (new cljs.core.async.t15641(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15642));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15641(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7223__auto___15765 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_15717){var state_val_15718 = (state_15717[1]);if((state_val_15718 === 1))
{var state_15717__$1 = state_15717;var statearr_15719_15766 = state_15717__$1;(statearr_15719_15766[2] = null);
(statearr_15719_15766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 2))
{var state_15717__$1 = state_15717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15717__$1,4,ch);
} else
{if((state_val_15718 === 3))
{var inst_15715 = (state_15717[2]);var state_15717__$1 = state_15717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15717__$1,inst_15715);
} else
{if((state_val_15718 === 4))
{var inst_15646 = (state_15717[7]);var inst_15646__$1 = (state_15717[2]);var inst_15647 = (inst_15646__$1 == null);var state_15717__$1 = (function (){var statearr_15720 = state_15717;(statearr_15720[7] = inst_15646__$1);
return statearr_15720;
})();if(cljs.core.truth_(inst_15647))
{var statearr_15721_15767 = state_15717__$1;(statearr_15721_15767[1] = 5);
} else
{var statearr_15722_15768 = state_15717__$1;(statearr_15722_15768[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 5))
{var inst_15653 = cljs.core.deref.call(null,mults);var inst_15654 = cljs.core.vals.call(null,inst_15653);var inst_15655 = cljs.core.seq.call(null,inst_15654);var inst_15656 = inst_15655;var inst_15657 = null;var inst_15658 = 0;var inst_15659 = 0;var state_15717__$1 = (function (){var statearr_15723 = state_15717;(statearr_15723[8] = inst_15658);
(statearr_15723[9] = inst_15659);
(statearr_15723[10] = inst_15657);
(statearr_15723[11] = inst_15656);
return statearr_15723;
})();var statearr_15724_15769 = state_15717__$1;(statearr_15724_15769[2] = null);
(statearr_15724_15769[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 6))
{var inst_15696 = (state_15717[12]);var inst_15694 = (state_15717[13]);var inst_15646 = (state_15717[7]);var inst_15694__$1 = topic_fn.call(null,inst_15646);var inst_15695 = cljs.core.deref.call(null,mults);var inst_15696__$1 = cljs.core.get.call(null,inst_15695,inst_15694__$1);var state_15717__$1 = (function (){var statearr_15725 = state_15717;(statearr_15725[12] = inst_15696__$1);
(statearr_15725[13] = inst_15694__$1);
return statearr_15725;
})();if(cljs.core.truth_(inst_15696__$1))
{var statearr_15726_15770 = state_15717__$1;(statearr_15726_15770[1] = 19);
} else
{var statearr_15727_15771 = state_15717__$1;(statearr_15727_15771[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 7))
{var inst_15713 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15728_15772 = state_15717__$1;(statearr_15728_15772[2] = inst_15713);
(statearr_15728_15772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 8))
{var inst_15658 = (state_15717[8]);var inst_15659 = (state_15717[9]);var inst_15661 = (inst_15659 < inst_15658);var inst_15662 = inst_15661;var state_15717__$1 = state_15717;if(cljs.core.truth_(inst_15662))
{var statearr_15732_15773 = state_15717__$1;(statearr_15732_15773[1] = 10);
} else
{var statearr_15733_15774 = state_15717__$1;(statearr_15733_15774[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 9))
{var inst_15692 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15734_15775 = state_15717__$1;(statearr_15734_15775[2] = inst_15692);
(statearr_15734_15775[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 10))
{var inst_15658 = (state_15717[8]);var inst_15659 = (state_15717[9]);var inst_15657 = (state_15717[10]);var inst_15656 = (state_15717[11]);var inst_15664 = cljs.core._nth.call(null,inst_15657,inst_15659);var inst_15665 = cljs.core.async.muxch_STAR_.call(null,inst_15664);var inst_15666 = cljs.core.async.close_BANG_.call(null,inst_15665);var inst_15667 = (inst_15659 + 1);var tmp15729 = inst_15658;var tmp15730 = inst_15657;var tmp15731 = inst_15656;var inst_15656__$1 = tmp15731;var inst_15657__$1 = tmp15730;var inst_15658__$1 = tmp15729;var inst_15659__$1 = inst_15667;var state_15717__$1 = (function (){var statearr_15735 = state_15717;(statearr_15735[8] = inst_15658__$1);
(statearr_15735[9] = inst_15659__$1);
(statearr_15735[14] = inst_15666);
(statearr_15735[10] = inst_15657__$1);
(statearr_15735[11] = inst_15656__$1);
return statearr_15735;
})();var statearr_15736_15776 = state_15717__$1;(statearr_15736_15776[2] = null);
(statearr_15736_15776[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 11))
{var inst_15656 = (state_15717[11]);var inst_15670 = (state_15717[15]);var inst_15670__$1 = cljs.core.seq.call(null,inst_15656);var state_15717__$1 = (function (){var statearr_15737 = state_15717;(statearr_15737[15] = inst_15670__$1);
return statearr_15737;
})();if(inst_15670__$1)
{var statearr_15738_15777 = state_15717__$1;(statearr_15738_15777[1] = 13);
} else
{var statearr_15739_15778 = state_15717__$1;(statearr_15739_15778[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 12))
{var inst_15690 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15740_15779 = state_15717__$1;(statearr_15740_15779[2] = inst_15690);
(statearr_15740_15779[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 13))
{var inst_15670 = (state_15717[15]);var inst_15672 = cljs.core.chunked_seq_QMARK_.call(null,inst_15670);var state_15717__$1 = state_15717;if(inst_15672)
{var statearr_15741_15780 = state_15717__$1;(statearr_15741_15780[1] = 16);
} else
{var statearr_15742_15781 = state_15717__$1;(statearr_15742_15781[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 14))
{var state_15717__$1 = state_15717;var statearr_15743_15782 = state_15717__$1;(statearr_15743_15782[2] = null);
(statearr_15743_15782[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 15))
{var inst_15688 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15744_15783 = state_15717__$1;(statearr_15744_15783[2] = inst_15688);
(statearr_15744_15783[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 16))
{var inst_15670 = (state_15717[15]);var inst_15674 = cljs.core.chunk_first.call(null,inst_15670);var inst_15675 = cljs.core.chunk_rest.call(null,inst_15670);var inst_15676 = cljs.core.count.call(null,inst_15674);var inst_15656 = inst_15675;var inst_15657 = inst_15674;var inst_15658 = inst_15676;var inst_15659 = 0;var state_15717__$1 = (function (){var statearr_15745 = state_15717;(statearr_15745[8] = inst_15658);
(statearr_15745[9] = inst_15659);
(statearr_15745[10] = inst_15657);
(statearr_15745[11] = inst_15656);
return statearr_15745;
})();var statearr_15746_15784 = state_15717__$1;(statearr_15746_15784[2] = null);
(statearr_15746_15784[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 17))
{var inst_15670 = (state_15717[15]);var inst_15679 = cljs.core.first.call(null,inst_15670);var inst_15680 = cljs.core.async.muxch_STAR_.call(null,inst_15679);var inst_15681 = cljs.core.async.close_BANG_.call(null,inst_15680);var inst_15682 = cljs.core.next.call(null,inst_15670);var inst_15656 = inst_15682;var inst_15657 = null;var inst_15658 = 0;var inst_15659 = 0;var state_15717__$1 = (function (){var statearr_15747 = state_15717;(statearr_15747[8] = inst_15658);
(statearr_15747[9] = inst_15659);
(statearr_15747[10] = inst_15657);
(statearr_15747[11] = inst_15656);
(statearr_15747[16] = inst_15681);
return statearr_15747;
})();var statearr_15748_15785 = state_15717__$1;(statearr_15748_15785[2] = null);
(statearr_15748_15785[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 18))
{var inst_15685 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15749_15786 = state_15717__$1;(statearr_15749_15786[2] = inst_15685);
(statearr_15749_15786[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 19))
{var state_15717__$1 = state_15717;var statearr_15750_15787 = state_15717__$1;(statearr_15750_15787[2] = null);
(statearr_15750_15787[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 20))
{var state_15717__$1 = state_15717;var statearr_15751_15788 = state_15717__$1;(statearr_15751_15788[2] = null);
(statearr_15751_15788[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 21))
{var inst_15710 = (state_15717[2]);var state_15717__$1 = (function (){var statearr_15752 = state_15717;(statearr_15752[17] = inst_15710);
return statearr_15752;
})();var statearr_15753_15789 = state_15717__$1;(statearr_15753_15789[2] = null);
(statearr_15753_15789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 22))
{var inst_15707 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15754_15790 = state_15717__$1;(statearr_15754_15790[2] = inst_15707);
(statearr_15754_15790[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 23))
{var inst_15694 = (state_15717[13]);var inst_15698 = (state_15717[2]);var inst_15699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15694);var state_15717__$1 = (function (){var statearr_15755 = state_15717;(statearr_15755[18] = inst_15698);
return statearr_15755;
})();var statearr_15756_15791 = state_15717__$1;(statearr_15756_15791[2] = inst_15699);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15717__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15718 === 24))
{var inst_15696 = (state_15717[12]);var inst_15646 = (state_15717[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15717,23,Object,null,22);var inst_15703 = cljs.core.async.muxch_STAR_.call(null,inst_15696);var state_15717__$1 = state_15717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15717__$1,25,inst_15703,inst_15646);
} else
{if((state_val_15718 === 25))
{var inst_15705 = (state_15717[2]);var state_15717__$1 = state_15717;var statearr_15757_15792 = state_15717__$1;(statearr_15757_15792[2] = inst_15705);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15717__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_15761 = (new Array(19));(statearr_15761[0] = state_machine__7154__auto__);
(statearr_15761[1] = 1);
return statearr_15761;
});
var state_machine__7154__auto____1 = (function (state_15717){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_15717);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e15762){if((e15762 instanceof Object))
{var ex__7157__auto__ = e15762;var statearr_15763_15793 = state_15717;(statearr_15763_15793[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15794 = state_15717;
state_15717 = G__15794;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_15717){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_15717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_15764 = f__7224__auto__.call(null);(statearr_15764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___15765);
return statearr_15764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7223__auto___15931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_15901){var state_val_15902 = (state_15901[1]);if((state_val_15902 === 1))
{var state_15901__$1 = state_15901;var statearr_15903_15932 = state_15901__$1;(statearr_15903_15932[2] = null);
(statearr_15903_15932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 2))
{var inst_15864 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15865 = 0;var state_15901__$1 = (function (){var statearr_15904 = state_15901;(statearr_15904[7] = inst_15865);
(statearr_15904[8] = inst_15864);
return statearr_15904;
})();var statearr_15905_15933 = state_15901__$1;(statearr_15905_15933[2] = null);
(statearr_15905_15933[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 3))
{var inst_15899 = (state_15901[2]);var state_15901__$1 = state_15901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15901__$1,inst_15899);
} else
{if((state_val_15902 === 4))
{var inst_15865 = (state_15901[7]);var inst_15867 = (inst_15865 < cnt);var state_15901__$1 = state_15901;if(cljs.core.truth_(inst_15867))
{var statearr_15906_15934 = state_15901__$1;(statearr_15906_15934[1] = 6);
} else
{var statearr_15907_15935 = state_15901__$1;(statearr_15907_15935[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 5))
{var inst_15885 = (state_15901[2]);var state_15901__$1 = (function (){var statearr_15908 = state_15901;(statearr_15908[9] = inst_15885);
return statearr_15908;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15901__$1,12,dchan);
} else
{if((state_val_15902 === 6))
{var state_15901__$1 = state_15901;var statearr_15909_15936 = state_15901__$1;(statearr_15909_15936[2] = null);
(statearr_15909_15936[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 7))
{var state_15901__$1 = state_15901;var statearr_15910_15937 = state_15901__$1;(statearr_15910_15937[2] = null);
(statearr_15910_15937[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 8))
{var inst_15883 = (state_15901[2]);var state_15901__$1 = state_15901;var statearr_15911_15938 = state_15901__$1;(statearr_15911_15938[2] = inst_15883);
(statearr_15911_15938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 9))
{var inst_15865 = (state_15901[7]);var inst_15878 = (state_15901[2]);var inst_15879 = (inst_15865 + 1);var inst_15865__$1 = inst_15879;var state_15901__$1 = (function (){var statearr_15912 = state_15901;(statearr_15912[7] = inst_15865__$1);
(statearr_15912[10] = inst_15878);
return statearr_15912;
})();var statearr_15913_15939 = state_15901__$1;(statearr_15913_15939[2] = null);
(statearr_15913_15939[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 10))
{var inst_15869 = (state_15901[2]);var inst_15870 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15901__$1 = (function (){var statearr_15914 = state_15901;(statearr_15914[11] = inst_15869);
return statearr_15914;
})();var statearr_15915_15940 = state_15901__$1;(statearr_15915_15940[2] = inst_15870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15901__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 11))
{var inst_15865 = (state_15901[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15901,10,Object,null,9);var inst_15874 = chs__$1.call(null,inst_15865);var inst_15875 = done.call(null,inst_15865);var inst_15876 = cljs.core.async.take_BANG_.call(null,inst_15874,inst_15875);var state_15901__$1 = state_15901;var statearr_15916_15941 = state_15901__$1;(statearr_15916_15941[2] = inst_15876);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15901__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 12))
{var inst_15887 = (state_15901[12]);var inst_15887__$1 = (state_15901[2]);var inst_15888 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15887__$1);var state_15901__$1 = (function (){var statearr_15917 = state_15901;(statearr_15917[12] = inst_15887__$1);
return statearr_15917;
})();if(cljs.core.truth_(inst_15888))
{var statearr_15918_15942 = state_15901__$1;(statearr_15918_15942[1] = 13);
} else
{var statearr_15919_15943 = state_15901__$1;(statearr_15919_15943[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 13))
{var inst_15890 = cljs.core.async.close_BANG_.call(null,out);var state_15901__$1 = state_15901;var statearr_15920_15944 = state_15901__$1;(statearr_15920_15944[2] = inst_15890);
(statearr_15920_15944[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 14))
{var inst_15887 = (state_15901[12]);var inst_15892 = cljs.core.apply.call(null,f,inst_15887);var state_15901__$1 = state_15901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15901__$1,16,out,inst_15892);
} else
{if((state_val_15902 === 15))
{var inst_15897 = (state_15901[2]);var state_15901__$1 = state_15901;var statearr_15921_15945 = state_15901__$1;(statearr_15921_15945[2] = inst_15897);
(statearr_15921_15945[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15902 === 16))
{var inst_15894 = (state_15901[2]);var state_15901__$1 = (function (){var statearr_15922 = state_15901;(statearr_15922[13] = inst_15894);
return statearr_15922;
})();var statearr_15923_15946 = state_15901__$1;(statearr_15923_15946[2] = null);
(statearr_15923_15946[1] = 2);
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
}
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_15927 = (new Array(14));(statearr_15927[0] = state_machine__7154__auto__);
(statearr_15927[1] = 1);
return statearr_15927;
});
var state_machine__7154__auto____1 = (function (state_15901){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_15901);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e15928){if((e15928 instanceof Object))
{var ex__7157__auto__ = e15928;var statearr_15929_15947 = state_15901;(statearr_15929_15947[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15948 = state_15901;
state_15901 = G__15948;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_15901){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_15901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_15930 = f__7224__auto__.call(null);(statearr_15930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___15931);
return statearr_15930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7223__auto___16056 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_16032){var state_val_16033 = (state_16032[1]);if((state_val_16033 === 1))
{var inst_16003 = cljs.core.vec.call(null,chs);var inst_16004 = inst_16003;var state_16032__$1 = (function (){var statearr_16034 = state_16032;(statearr_16034[7] = inst_16004);
return statearr_16034;
})();var statearr_16035_16057 = state_16032__$1;(statearr_16035_16057[2] = null);
(statearr_16035_16057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 2))
{var inst_16004 = (state_16032[7]);var inst_16006 = cljs.core.count.call(null,inst_16004);var inst_16007 = (inst_16006 > 0);var state_16032__$1 = state_16032;if(cljs.core.truth_(inst_16007))
{var statearr_16036_16058 = state_16032__$1;(statearr_16036_16058[1] = 4);
} else
{var statearr_16037_16059 = state_16032__$1;(statearr_16037_16059[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 3))
{var inst_16030 = (state_16032[2]);var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16032__$1,inst_16030);
} else
{if((state_val_16033 === 4))
{var inst_16004 = (state_16032[7]);var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16032__$1,7,inst_16004);
} else
{if((state_val_16033 === 5))
{var inst_16026 = cljs.core.async.close_BANG_.call(null,out);var state_16032__$1 = state_16032;var statearr_16038_16060 = state_16032__$1;(statearr_16038_16060[2] = inst_16026);
(statearr_16038_16060[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 6))
{var inst_16028 = (state_16032[2]);var state_16032__$1 = state_16032;var statearr_16039_16061 = state_16032__$1;(statearr_16039_16061[2] = inst_16028);
(statearr_16039_16061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 7))
{var inst_16012 = (state_16032[8]);var inst_16011 = (state_16032[9]);var inst_16011__$1 = (state_16032[2]);var inst_16012__$1 = cljs.core.nth.call(null,inst_16011__$1,0,null);var inst_16013 = cljs.core.nth.call(null,inst_16011__$1,1,null);var inst_16014 = (inst_16012__$1 == null);var state_16032__$1 = (function (){var statearr_16040 = state_16032;(statearr_16040[10] = inst_16013);
(statearr_16040[8] = inst_16012__$1);
(statearr_16040[9] = inst_16011__$1);
return statearr_16040;
})();if(cljs.core.truth_(inst_16014))
{var statearr_16041_16062 = state_16032__$1;(statearr_16041_16062[1] = 8);
} else
{var statearr_16042_16063 = state_16032__$1;(statearr_16042_16063[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 8))
{var inst_16004 = (state_16032[7]);var inst_16013 = (state_16032[10]);var inst_16012 = (state_16032[8]);var inst_16011 = (state_16032[9]);var inst_16016 = (function (){var c = inst_16013;var v = inst_16012;var vec__16009 = inst_16011;var cs = inst_16004;return ((function (c,v,vec__16009,cs,inst_16004,inst_16013,inst_16012,inst_16011,state_val_16033){
return (function (p1__15949_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15949_SHARP_);
});
;})(c,v,vec__16009,cs,inst_16004,inst_16013,inst_16012,inst_16011,state_val_16033))
})();var inst_16017 = cljs.core.filterv.call(null,inst_16016,inst_16004);var inst_16004__$1 = inst_16017;var state_16032__$1 = (function (){var statearr_16043 = state_16032;(statearr_16043[7] = inst_16004__$1);
return statearr_16043;
})();var statearr_16044_16064 = state_16032__$1;(statearr_16044_16064[2] = null);
(statearr_16044_16064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 9))
{var inst_16012 = (state_16032[8]);var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16032__$1,11,out,inst_16012);
} else
{if((state_val_16033 === 10))
{var inst_16024 = (state_16032[2]);var state_16032__$1 = state_16032;var statearr_16046_16065 = state_16032__$1;(statearr_16046_16065[2] = inst_16024);
(statearr_16046_16065[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 11))
{var inst_16004 = (state_16032[7]);var inst_16021 = (state_16032[2]);var tmp16045 = inst_16004;var inst_16004__$1 = tmp16045;var state_16032__$1 = (function (){var statearr_16047 = state_16032;(statearr_16047[11] = inst_16021);
(statearr_16047[7] = inst_16004__$1);
return statearr_16047;
})();var statearr_16048_16066 = state_16032__$1;(statearr_16048_16066[2] = null);
(statearr_16048_16066[1] = 2);
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
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_16052 = (new Array(12));(statearr_16052[0] = state_machine__7154__auto__);
(statearr_16052[1] = 1);
return statearr_16052;
});
var state_machine__7154__auto____1 = (function (state_16032){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_16032);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e16053){if((e16053 instanceof Object))
{var ex__7157__auto__ = e16053;var statearr_16054_16067 = state_16032;(statearr_16054_16067[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16068 = state_16032;
state_16032 = G__16068;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_16032){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_16032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_16055 = f__7224__auto__.call(null);(statearr_16055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___16056);
return statearr_16055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7223__auto___16161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_16138){var state_val_16139 = (state_16138[1]);if((state_val_16139 === 1))
{var inst_16115 = 0;var state_16138__$1 = (function (){var statearr_16140 = state_16138;(statearr_16140[7] = inst_16115);
return statearr_16140;
})();var statearr_16141_16162 = state_16138__$1;(statearr_16141_16162[2] = null);
(statearr_16141_16162[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 2))
{var inst_16115 = (state_16138[7]);var inst_16117 = (inst_16115 < n);var state_16138__$1 = state_16138;if(cljs.core.truth_(inst_16117))
{var statearr_16142_16163 = state_16138__$1;(statearr_16142_16163[1] = 4);
} else
{var statearr_16143_16164 = state_16138__$1;(statearr_16143_16164[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 3))
{var inst_16135 = (state_16138[2]);var inst_16136 = cljs.core.async.close_BANG_.call(null,out);var state_16138__$1 = (function (){var statearr_16144 = state_16138;(statearr_16144[8] = inst_16135);
return statearr_16144;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16138__$1,inst_16136);
} else
{if((state_val_16139 === 4))
{var state_16138__$1 = state_16138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16138__$1,7,ch);
} else
{if((state_val_16139 === 5))
{var state_16138__$1 = state_16138;var statearr_16145_16165 = state_16138__$1;(statearr_16145_16165[2] = null);
(statearr_16145_16165[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 6))
{var inst_16133 = (state_16138[2]);var state_16138__$1 = state_16138;var statearr_16146_16166 = state_16138__$1;(statearr_16146_16166[2] = inst_16133);
(statearr_16146_16166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 7))
{var inst_16120 = (state_16138[9]);var inst_16120__$1 = (state_16138[2]);var inst_16121 = (inst_16120__$1 == null);var inst_16122 = cljs.core.not.call(null,inst_16121);var state_16138__$1 = (function (){var statearr_16147 = state_16138;(statearr_16147[9] = inst_16120__$1);
return statearr_16147;
})();if(inst_16122)
{var statearr_16148_16167 = state_16138__$1;(statearr_16148_16167[1] = 8);
} else
{var statearr_16149_16168 = state_16138__$1;(statearr_16149_16168[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 8))
{var inst_16120 = (state_16138[9]);var state_16138__$1 = state_16138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16138__$1,11,out,inst_16120);
} else
{if((state_val_16139 === 9))
{var state_16138__$1 = state_16138;var statearr_16150_16169 = state_16138__$1;(statearr_16150_16169[2] = null);
(statearr_16150_16169[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 10))
{var inst_16130 = (state_16138[2]);var state_16138__$1 = state_16138;var statearr_16151_16170 = state_16138__$1;(statearr_16151_16170[2] = inst_16130);
(statearr_16151_16170[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16139 === 11))
{var inst_16115 = (state_16138[7]);var inst_16125 = (state_16138[2]);var inst_16126 = (inst_16115 + 1);var inst_16115__$1 = inst_16126;var state_16138__$1 = (function (){var statearr_16152 = state_16138;(statearr_16152[7] = inst_16115__$1);
(statearr_16152[10] = inst_16125);
return statearr_16152;
})();var statearr_16153_16171 = state_16138__$1;(statearr_16153_16171[2] = null);
(statearr_16153_16171[1] = 2);
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
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_16157 = (new Array(11));(statearr_16157[0] = state_machine__7154__auto__);
(statearr_16157[1] = 1);
return statearr_16157;
});
var state_machine__7154__auto____1 = (function (state_16138){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_16138);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e16158){if((e16158 instanceof Object))
{var ex__7157__auto__ = e16158;var statearr_16159_16172 = state_16138;(statearr_16159_16172[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16138);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16173 = state_16138;
state_16138 = G__16173;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_16138){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_16138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_16160 = f__7224__auto__.call(null);(statearr_16160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___16161);
return statearr_16160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7223__auto___16270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_16245){var state_val_16246 = (state_16245[1]);if((state_val_16246 === 1))
{var inst_16222 = null;var state_16245__$1 = (function (){var statearr_16247 = state_16245;(statearr_16247[7] = inst_16222);
return statearr_16247;
})();var statearr_16248_16271 = state_16245__$1;(statearr_16248_16271[2] = null);
(statearr_16248_16271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 2))
{var state_16245__$1 = state_16245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16245__$1,4,ch);
} else
{if((state_val_16246 === 3))
{var inst_16242 = (state_16245[2]);var inst_16243 = cljs.core.async.close_BANG_.call(null,out);var state_16245__$1 = (function (){var statearr_16249 = state_16245;(statearr_16249[8] = inst_16242);
return statearr_16249;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16245__$1,inst_16243);
} else
{if((state_val_16246 === 4))
{var inst_16225 = (state_16245[9]);var inst_16225__$1 = (state_16245[2]);var inst_16226 = (inst_16225__$1 == null);var inst_16227 = cljs.core.not.call(null,inst_16226);var state_16245__$1 = (function (){var statearr_16250 = state_16245;(statearr_16250[9] = inst_16225__$1);
return statearr_16250;
})();if(inst_16227)
{var statearr_16251_16272 = state_16245__$1;(statearr_16251_16272[1] = 5);
} else
{var statearr_16252_16273 = state_16245__$1;(statearr_16252_16273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 5))
{var inst_16225 = (state_16245[9]);var inst_16222 = (state_16245[7]);var inst_16229 = cljs.core._EQ_.call(null,inst_16225,inst_16222);var state_16245__$1 = state_16245;if(inst_16229)
{var statearr_16253_16274 = state_16245__$1;(statearr_16253_16274[1] = 8);
} else
{var statearr_16254_16275 = state_16245__$1;(statearr_16254_16275[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 6))
{var state_16245__$1 = state_16245;var statearr_16256_16276 = state_16245__$1;(statearr_16256_16276[2] = null);
(statearr_16256_16276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 7))
{var inst_16240 = (state_16245[2]);var state_16245__$1 = state_16245;var statearr_16257_16277 = state_16245__$1;(statearr_16257_16277[2] = inst_16240);
(statearr_16257_16277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 8))
{var inst_16222 = (state_16245[7]);var tmp16255 = inst_16222;var inst_16222__$1 = tmp16255;var state_16245__$1 = (function (){var statearr_16258 = state_16245;(statearr_16258[7] = inst_16222__$1);
return statearr_16258;
})();var statearr_16259_16278 = state_16245__$1;(statearr_16259_16278[2] = null);
(statearr_16259_16278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 9))
{var inst_16225 = (state_16245[9]);var state_16245__$1 = state_16245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16245__$1,11,out,inst_16225);
} else
{if((state_val_16246 === 10))
{var inst_16237 = (state_16245[2]);var state_16245__$1 = state_16245;var statearr_16260_16279 = state_16245__$1;(statearr_16260_16279[2] = inst_16237);
(statearr_16260_16279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16246 === 11))
{var inst_16225 = (state_16245[9]);var inst_16234 = (state_16245[2]);var inst_16222 = inst_16225;var state_16245__$1 = (function (){var statearr_16261 = state_16245;(statearr_16261[7] = inst_16222);
(statearr_16261[10] = inst_16234);
return statearr_16261;
})();var statearr_16262_16280 = state_16245__$1;(statearr_16262_16280[2] = null);
(statearr_16262_16280[1] = 2);
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
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_16266 = (new Array(11));(statearr_16266[0] = state_machine__7154__auto__);
(statearr_16266[1] = 1);
return statearr_16266;
});
var state_machine__7154__auto____1 = (function (state_16245){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_16245);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e16267){if((e16267 instanceof Object))
{var ex__7157__auto__ = e16267;var statearr_16268_16281 = state_16245;(statearr_16268_16281[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16282 = state_16245;
state_16245 = G__16282;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_16269 = f__7224__auto__.call(null);(statearr_16269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___16270);
return statearr_16269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7223__auto___16417 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_16387){var state_val_16388 = (state_16387[1]);if((state_val_16388 === 1))
{var inst_16350 = (new Array(n));var inst_16351 = inst_16350;var inst_16352 = 0;var state_16387__$1 = (function (){var statearr_16389 = state_16387;(statearr_16389[7] = inst_16351);
(statearr_16389[8] = inst_16352);
return statearr_16389;
})();var statearr_16390_16418 = state_16387__$1;(statearr_16390_16418[2] = null);
(statearr_16390_16418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 2))
{var state_16387__$1 = state_16387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16387__$1,4,ch);
} else
{if((state_val_16388 === 3))
{var inst_16385 = (state_16387[2]);var state_16387__$1 = state_16387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16387__$1,inst_16385);
} else
{if((state_val_16388 === 4))
{var inst_16355 = (state_16387[9]);var inst_16355__$1 = (state_16387[2]);var inst_16356 = (inst_16355__$1 == null);var inst_16357 = cljs.core.not.call(null,inst_16356);var state_16387__$1 = (function (){var statearr_16391 = state_16387;(statearr_16391[9] = inst_16355__$1);
return statearr_16391;
})();if(inst_16357)
{var statearr_16392_16419 = state_16387__$1;(statearr_16392_16419[1] = 5);
} else
{var statearr_16393_16420 = state_16387__$1;(statearr_16393_16420[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 5))
{var inst_16355 = (state_16387[9]);var inst_16360 = (state_16387[10]);var inst_16351 = (state_16387[7]);var inst_16352 = (state_16387[8]);var inst_16359 = (inst_16351[inst_16352] = inst_16355);var inst_16360__$1 = (inst_16352 + 1);var inst_16361 = (inst_16360__$1 < n);var state_16387__$1 = (function (){var statearr_16394 = state_16387;(statearr_16394[11] = inst_16359);
(statearr_16394[10] = inst_16360__$1);
return statearr_16394;
})();if(cljs.core.truth_(inst_16361))
{var statearr_16395_16421 = state_16387__$1;(statearr_16395_16421[1] = 8);
} else
{var statearr_16396_16422 = state_16387__$1;(statearr_16396_16422[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 6))
{var inst_16352 = (state_16387[8]);var inst_16373 = (inst_16352 > 0);var state_16387__$1 = state_16387;if(cljs.core.truth_(inst_16373))
{var statearr_16398_16423 = state_16387__$1;(statearr_16398_16423[1] = 12);
} else
{var statearr_16399_16424 = state_16387__$1;(statearr_16399_16424[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 7))
{var inst_16383 = (state_16387[2]);var state_16387__$1 = state_16387;var statearr_16400_16425 = state_16387__$1;(statearr_16400_16425[2] = inst_16383);
(statearr_16400_16425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 8))
{var inst_16360 = (state_16387[10]);var inst_16351 = (state_16387[7]);var tmp16397 = inst_16351;var inst_16351__$1 = tmp16397;var inst_16352 = inst_16360;var state_16387__$1 = (function (){var statearr_16401 = state_16387;(statearr_16401[7] = inst_16351__$1);
(statearr_16401[8] = inst_16352);
return statearr_16401;
})();var statearr_16402_16426 = state_16387__$1;(statearr_16402_16426[2] = null);
(statearr_16402_16426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 9))
{var inst_16351 = (state_16387[7]);var inst_16365 = cljs.core.vec.call(null,inst_16351);var state_16387__$1 = state_16387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16387__$1,11,out,inst_16365);
} else
{if((state_val_16388 === 10))
{var inst_16371 = (state_16387[2]);var state_16387__$1 = state_16387;var statearr_16403_16427 = state_16387__$1;(statearr_16403_16427[2] = inst_16371);
(statearr_16403_16427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 11))
{var inst_16367 = (state_16387[2]);var inst_16368 = (new Array(n));var inst_16351 = inst_16368;var inst_16352 = 0;var state_16387__$1 = (function (){var statearr_16404 = state_16387;(statearr_16404[7] = inst_16351);
(statearr_16404[8] = inst_16352);
(statearr_16404[12] = inst_16367);
return statearr_16404;
})();var statearr_16405_16428 = state_16387__$1;(statearr_16405_16428[2] = null);
(statearr_16405_16428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 12))
{var inst_16351 = (state_16387[7]);var inst_16375 = cljs.core.vec.call(null,inst_16351);var state_16387__$1 = state_16387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16387__$1,15,out,inst_16375);
} else
{if((state_val_16388 === 13))
{var state_16387__$1 = state_16387;var statearr_16406_16429 = state_16387__$1;(statearr_16406_16429[2] = null);
(statearr_16406_16429[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 14))
{var inst_16380 = (state_16387[2]);var inst_16381 = cljs.core.async.close_BANG_.call(null,out);var state_16387__$1 = (function (){var statearr_16407 = state_16387;(statearr_16407[13] = inst_16380);
return statearr_16407;
})();var statearr_16408_16430 = state_16387__$1;(statearr_16408_16430[2] = inst_16381);
(statearr_16408_16430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16388 === 15))
{var inst_16377 = (state_16387[2]);var state_16387__$1 = state_16387;var statearr_16409_16431 = state_16387__$1;(statearr_16409_16431[2] = inst_16377);
(statearr_16409_16431[1] = 14);
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
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_16413 = (new Array(14));(statearr_16413[0] = state_machine__7154__auto__);
(statearr_16413[1] = 1);
return statearr_16413;
});
var state_machine__7154__auto____1 = (function (state_16387){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_16387);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e16414){if((e16414 instanceof Object))
{var ex__7157__auto__ = e16414;var statearr_16415_16432 = state_16387;(statearr_16415_16432[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16433 = state_16387;
state_16387 = G__16433;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_16387){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_16387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_16416 = f__7224__auto__.call(null);(statearr_16416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___16417);
return statearr_16416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7223__auto___16576 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7224__auto__ = (function (){var switch__7153__auto__ = (function (state_16546){var state_val_16547 = (state_16546[1]);if((state_val_16547 === 1))
{var inst_16505 = (new Array(0));var inst_16506 = inst_16505;var inst_16507 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16546__$1 = (function (){var statearr_16548 = state_16546;(statearr_16548[7] = inst_16506);
(statearr_16548[8] = inst_16507);
return statearr_16548;
})();var statearr_16549_16577 = state_16546__$1;(statearr_16549_16577[2] = null);
(statearr_16549_16577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 2))
{var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16546__$1,4,ch);
} else
{if((state_val_16547 === 3))
{var inst_16544 = (state_16546[2]);var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16546__$1,inst_16544);
} else
{if((state_val_16547 === 4))
{var inst_16510 = (state_16546[9]);var inst_16510__$1 = (state_16546[2]);var inst_16511 = (inst_16510__$1 == null);var inst_16512 = cljs.core.not.call(null,inst_16511);var state_16546__$1 = (function (){var statearr_16550 = state_16546;(statearr_16550[9] = inst_16510__$1);
return statearr_16550;
})();if(inst_16512)
{var statearr_16551_16578 = state_16546__$1;(statearr_16551_16578[1] = 5);
} else
{var statearr_16552_16579 = state_16546__$1;(statearr_16552_16579[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 5))
{var inst_16514 = (state_16546[10]);var inst_16507 = (state_16546[8]);var inst_16510 = (state_16546[9]);var inst_16514__$1 = f.call(null,inst_16510);var inst_16515 = cljs.core._EQ_.call(null,inst_16514__$1,inst_16507);var inst_16516 = cljs.core.keyword_identical_QMARK_.call(null,inst_16507,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16517 = (inst_16515) || (inst_16516);var state_16546__$1 = (function (){var statearr_16553 = state_16546;(statearr_16553[10] = inst_16514__$1);
return statearr_16553;
})();if(cljs.core.truth_(inst_16517))
{var statearr_16554_16580 = state_16546__$1;(statearr_16554_16580[1] = 8);
} else
{var statearr_16555_16581 = state_16546__$1;(statearr_16555_16581[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 6))
{var inst_16506 = (state_16546[7]);var inst_16531 = inst_16506.length;var inst_16532 = (inst_16531 > 0);var state_16546__$1 = state_16546;if(cljs.core.truth_(inst_16532))
{var statearr_16557_16582 = state_16546__$1;(statearr_16557_16582[1] = 12);
} else
{var statearr_16558_16583 = state_16546__$1;(statearr_16558_16583[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 7))
{var inst_16542 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16559_16584 = state_16546__$1;(statearr_16559_16584[2] = inst_16542);
(statearr_16559_16584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 8))
{var inst_16514 = (state_16546[10]);var inst_16506 = (state_16546[7]);var inst_16510 = (state_16546[9]);var inst_16519 = inst_16506.push(inst_16510);var tmp16556 = inst_16506;var inst_16506__$1 = tmp16556;var inst_16507 = inst_16514;var state_16546__$1 = (function (){var statearr_16560 = state_16546;(statearr_16560[7] = inst_16506__$1);
(statearr_16560[8] = inst_16507);
(statearr_16560[11] = inst_16519);
return statearr_16560;
})();var statearr_16561_16585 = state_16546__$1;(statearr_16561_16585[2] = null);
(statearr_16561_16585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 9))
{var inst_16506 = (state_16546[7]);var inst_16522 = cljs.core.vec.call(null,inst_16506);var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16546__$1,11,out,inst_16522);
} else
{if((state_val_16547 === 10))
{var inst_16529 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16562_16586 = state_16546__$1;(statearr_16562_16586[2] = inst_16529);
(statearr_16562_16586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 11))
{var inst_16514 = (state_16546[10]);var inst_16510 = (state_16546[9]);var inst_16524 = (state_16546[2]);var inst_16525 = (new Array(0));var inst_16526 = inst_16525.push(inst_16510);var inst_16506 = inst_16525;var inst_16507 = inst_16514;var state_16546__$1 = (function (){var statearr_16563 = state_16546;(statearr_16563[7] = inst_16506);
(statearr_16563[8] = inst_16507);
(statearr_16563[12] = inst_16526);
(statearr_16563[13] = inst_16524);
return statearr_16563;
})();var statearr_16564_16587 = state_16546__$1;(statearr_16564_16587[2] = null);
(statearr_16564_16587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 12))
{var inst_16506 = (state_16546[7]);var inst_16534 = cljs.core.vec.call(null,inst_16506);var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16546__$1,15,out,inst_16534);
} else
{if((state_val_16547 === 13))
{var state_16546__$1 = state_16546;var statearr_16565_16588 = state_16546__$1;(statearr_16565_16588[2] = null);
(statearr_16565_16588[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 14))
{var inst_16539 = (state_16546[2]);var inst_16540 = cljs.core.async.close_BANG_.call(null,out);var state_16546__$1 = (function (){var statearr_16566 = state_16546;(statearr_16566[14] = inst_16539);
return statearr_16566;
})();var statearr_16567_16589 = state_16546__$1;(statearr_16567_16589[2] = inst_16540);
(statearr_16567_16589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 15))
{var inst_16536 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16568_16590 = state_16546__$1;(statearr_16568_16590[2] = inst_16536);
(statearr_16568_16590[1] = 14);
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
}
}
}
}
}
}
}
});return ((function (switch__7153__auto__){
return (function() {
var state_machine__7154__auto__ = null;
var state_machine__7154__auto____0 = (function (){var statearr_16572 = (new Array(15));(statearr_16572[0] = state_machine__7154__auto__);
(statearr_16572[1] = 1);
return statearr_16572;
});
var state_machine__7154__auto____1 = (function (state_16546){while(true){
var ret_value__7155__auto__ = (function (){try{while(true){
var result__7156__auto__ = switch__7153__auto__.call(null,state_16546);if(cljs.core.keyword_identical_QMARK_.call(null,result__7156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7156__auto__;
}
break;
}
}catch (e16573){if((e16573 instanceof Object))
{var ex__7157__auto__ = e16573;var statearr_16574_16591 = state_16546;(statearr_16574_16591[5] = ex__7157__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7155__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16592 = state_16546;
state_16546 = G__16592;
continue;
}
} else
{return ret_value__7155__auto__;
}
break;
}
});
state_machine__7154__auto__ = function(state_16546){
switch(arguments.length){
case 0:
return state_machine__7154__auto____0.call(this);
case 1:
return state_machine__7154__auto____1.call(this,state_16546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7154__auto____0;
state_machine__7154__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7154__auto____1;
return state_machine__7154__auto__;
})()
;})(switch__7153__auto__))
})();var state__7225__auto__ = (function (){var statearr_16575 = f__7224__auto__.call(null);(statearr_16575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7223__auto___16576);
return statearr_16575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7225__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map