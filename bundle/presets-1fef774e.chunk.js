import{gi as e,f_ as s,ea as l,L as t,j as a,k as n,gj as i,fZ as d,E as p,cn as o,cq as c,cs as r,aG as m,bq as h,B as I,aH as g,$ as v}from"./detailed_results-bc3a1d81.chunk.js";import{e as O,f as u}from"./preset_utils-40b1d43e.chunk.js";const f={items:[{id:40562,enchant:3820,gems:[41285,39998]},{id:44661,gems:[40026]},{id:40459,enchant:3810,gems:[39998]},{id:44005,enchant:3722,gems:[40026]},{id:44002,enchant:1144,gems:[39998,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40454,enchant:3604,gems:[40049,0]},{id:40561,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:3606},{id:40719},{id:40399},{id:40255},{id:40432},{id:40395,enchant:3834},{id:40273},{id:39712}]},T={items:[{id:46172,enchant:3820,gems:[41285,45883]},{id:45243,gems:[39998]},{id:46165,enchant:3810,gems:[39998]},{id:45242,enchant:3722,gems:[40049]},{id:46168,enchant:1144,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,enchant:3601,gems:[39998,39998,39998]},{id:46170,enchant:3719,gems:[39998,40049]},{id:45135,enchant:3606,gems:[39998,40049]},{id:45495,gems:[40026]},{id:46046,gems:[39998]},{id:45518},{id:45466},{id:45620,enchant:3834,gems:[40026]},{id:45617},{id:45294,gems:[39998]}]},S={items:[{id:48088,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:48091,enchant:3810,gems:[40155]},{id:47551,enchant:3722,gems:[40113]},{id:48090,enchant:1144,gems:[40113,40133]},{id:47467,enchant:2332,gems:[40155,0]},{id:45665,enchant:3604,gems:[40113,40113,0]},{id:47419,enchant:3601,gems:[40133,40113,40113]},{id:48089,enchant:3719,gems:[40113,40133]},{id:47454,enchant:3606,gems:[40133,40113]},{id:47489,gems:[40155]},{id:45495,gems:[40113]},{id:45518},{id:47477},{id:47483,enchant:3834},{id:47437},{id:47995}]},y={items:[{id:51255,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40113]},{id:51257,enchant:3810,gems:[40155]},{id:50628,enchant:3722,gems:[40155]},{id:51259,enchant:1144,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51256,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3719,gems:[40113,40133,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40155]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40155]}]},G={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:48160}}},doAtValue:{const:{val:"-0.97s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:34433}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"61s"}}}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.75s"}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48125}}}}},{or:{vals:[{and:{vals:[{cmp:{op:"OpEq",lhs:{const:{val:"5"}},rhs:{auraNumStacks:{auraId:{spellId:15258}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"75s"}}}}]}},{and:{vals:[{cmp:{op:"OpLe",lhs:{const:{val:"3"}},rhs:{auraNumStacks:{auraId:{spellId:15258}}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"75s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:48125}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48160}}},rhs:{spellCastTime:{spellId:{spellId:48160}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:48160}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48300}}}}},castSpell:{spellId:{spellId:48300}}}},{hide:!0,action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:48127}}},rhs:{const:{val:"750ms"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:57669}}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:48127}}}},{hide:!0,action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:48127}}},rhs:{const:{val:"750ms"}}}},castSpell:{spellId:{spellId:48127}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:15258}}},rhs:{const:{val:"5"}}}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14751}}},{castSpell:{spellId:{spellId:48156}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48300}}},rhs:{const:{val:"200ms"}}}}]}},wait:{duration:{dotRemainingTime:{spellId:{spellId:48300}}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48160}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:48160}}},rhs:{channelClipDelay:{}}}}}},{dotIsActive:{spellId:{spellId:48160}}},{spellIsChanneling:{spellId:{spellId:48156}}}]}},wait:{duration:{math:{op:"OpSub",lhs:{dotRemainingTime:{spellId:{spellId:48160}}},rhs:{spellCastTime:{spellId:{spellId:48160}}}}}}}},{action:{channelSpell:{spellId:{spellId:48156},interruptIf:{cmp:{op:"OpLe",lhs:{gcdTimeToReady:{}},rhs:{channelClipDelay:{}}}}}}},{action:{castSpell:{spellId:{spellId:47585}}}}]},P={type:"TypeAPL",priorityList:[{action:{castSpell:{spellId:{spellId:34433}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"0.75s"}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target",index:2},spellId:{spellId:48125}}},rhs:{const:{val:"3s"}}}},{dotIsActive:{targetUnit:{type:"Target",index:2},spellId:{spellId:48125}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},channelSpell:{spellId:{spellId:48156},target:{type:"Target",index:2},interruptIf:{const:{val:"true"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target",index:1},spellId:{spellId:48125}}},rhs:{const:{val:"3s"}}}},{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:48125}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},channelSpell:{spellId:{spellId:48156},target:{type:"Target",index:1},interruptIf:{const:{val:"true"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:48125}}},rhs:{const:{val:"5s"}}}},{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:48125}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},channelSpell:{spellId:{spellId:48156},target:{type:"Target"},interruptIf:{const:{val:"true"}}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}},multidot:{spellId:{spellId:48160},maxDots:4,maxOverlap:{spellCastTime:{spellId:{spellId:48160}}}}}},{action:{multidot:{spellId:{spellId:48300},maxDots:1,maxOverlap:{}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}},multidot:{spellId:{spellId:48125},maxDots:3,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"2"}}}},channelSpell:{spellId:{spellId:53023},interruptIf:{const:{val:"true"}}}}},{action:{channelSpell:{spellId:{spellId:48156},interruptIf:{const:{val:"true"}}}}}]},A={type:"TypeAPL",priorityList:[{action:{castSpell:{spellId:{spellId:34433}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"7"}}}},channelSpell:{spellId:{spellId:53023},interruptIf:{const:{val:"true"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"0.75s"}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}},multidot:{spellId:{spellId:48160},maxDots:10,maxOverlap:{spellCastTime:{spellId:{spellId:48160}}}}}},{action:{multidot:{spellId:{spellId:48300},maxDots:1,maxOverlap:{}}}},{action:{channelSpell:{spellId:{spellId:53023},interruptIf:{const:{val:"true"}}}}}]},L=O("Preraid Preset",{items:[{id:42553,enchant:3820,gems:[41285,40049]},{id:40680},{id:34210,enchant:3810,gems:[39998,40026]},{id:41610,enchant:3722},{id:43792,enchant:1144,gems:[39998,40051]},{id:37361,enchant:2332,gems:[0]},{id:39530,enchant:3604,gems:[40049,0]},{id:40696,gems:[40049,39998]},{id:37854,enchant:3719},{id:44202,enchant:3826,gems:[40026]},{id:40585},{id:37694},{id:37835},{id:37873},{id:41384,enchant:3834},{id:40698},{id:37177}]}),w=O("P1 Preset",f),x=O("P2 Preset",T),E=O("P3 Preset",S),b=O("P4 Preset",y),C=e.create({rotationType:s.Ideal}),D=u("Default",G),F=u("AOE (2 to 4 targets)",P),j=u("AOE (4+ targets)",A),R={name:"Standard",data:l.create({talentsString:"05032031--325023051223010323151301351",glyphs:t.create({major1:a.GlyphOfShadow,major2:a.GlyphOfMindFlay,major3:a.GlyphOfDispersion,minor1:n.GlyphOfFortitude,minor2:n.GlyphOfShadowProtection,minor3:n.GlyphOfShadowfiend})})},k={name:"Enlightenment",data:l.create({talentsString:"05032031303005022--3250230012230101231513011",glyphs:t.create({major1:a.GlyphOfShadow,major2:a.GlyphOfMindFlay,major3:a.GlyphOfShadowWordDeath,minor1:n.GlyphOfFortitude,minor2:n.GlyphOfShadowProtection,minor3:n.GlyphOfShadowfiend})})},W=i.create({useShadowfiend:!0,useMindBlast:!0,useShadowWordDeath:!0,armor:d.InnerFire}),M=p.create({flask:o.FlaskOfTheFrostWyrm,food:c.FoodFishFeast,defaultPotion:r.PotionOfSpeed,prepopPotion:r.PotionOfWildMagic}),U=m.create({giftOfTheWild:h.TristateEffectImproved,powerWordFortitude:h.TristateEffectImproved,strengthOfEarthTotem:h.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,trueshotAura:!0,leaderOfThePack:h.TristateEffectImproved,icyTalons:!0,totemOfWrath:!0,moonkinAura:h.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0,demonicPact:500}),q=I.create({blessingOfKings:!0,blessingOfWisdom:h.TristateEffectImproved,blessingOfMight:h.TristateEffectImproved,vampiricTouch:!0}),B=g.create({sunderArmor:!0,faerieFire:h.TristateEffectImproved,bloodFrenzy:!0,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0}),N={channelClipDelay:100,profession1:v.Engineering,profession2:v.Tailoring,nibelungAverageCasts:11};export{M as D,k as E,N as O,b as P,D as R,R as S,C as a,W as b,U as c,q as d,B as e,F as f,j as g,L as h,w as i,x as j,E as k};
//# sourceMappingURL=presets-1fef774e.chunk.js.map
