import{fj as e,A as t,fk as a,cg as s,ch as n,fl as i,fm as r,fn as o,S as l,ea as d,L as c,p,q as m,fo as h,E as g,co as S,cp as u,cq as f,cs as I,cr as P,a2 as v,ab as O,F as R,aG as y,bq as A,w as k,B as T,aH as w,e4 as C,e1 as b,K as E,e5 as x,g as B,u as D,aU as G,bF as M}from"./detailed_results-bc3a1d81.chunk.js";import{a as H,y as W,m as j,e as F,f as N,Q as J,r as U,W as V,T as L,_,$ as q,a0 as z,a1 as K,a3 as Q,a2 as $,x as X,I as Y}from"./preset_utils-40b1d43e.chunk.js";import{s as Z}from"./apl_utils-17f765e9.chunk.js";const ee=H({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),te=W({fieldName:"shout",values:[{color:"c79c6e",value:e.WarriorShoutNone},{actionId:t.fromSpellId(47436),value:e.WarriorShoutBattle},{actionId:t.fromSpellId(469),value:e.WarriorShoutCommanding}]}),ae=j({fieldName:"useShatteringThrow",id:t.fromSpellId(64382)}),se={items:[{id:48430,enchant:3818,gems:[41380,40130]},{id:47116},{id:48454,enchant:3852,gems:[40119]},{id:45496,enchant:3605,gems:[40130]},{id:48450,enchant:3832,gems:[40167,40119]},{id:47570,enchant:3850,gems:[40167,0]},{id:48452,enchant:3860,gems:[40167,0]},{id:47072,enchant:3599,gems:[40130,36767]},{id:49904,enchant:3822,gems:[40130,40167,36767]},{id:49907,enchant:3232,gems:[40167,36767]},{id:45471,gems:[40167]},{id:47731},{id:47216},{id:47080},{id:45876,enchant:3788,gems:[40130]},{id:45877,enchant:3849,gems:[40119,40119]},{id:47660}]},ne={items:[{id:40546,enchant:3818,gems:[41380,40034]},{id:40387},{id:39704,enchant:3852,gems:[40034]},{id:40722,enchant:3605},{id:44e3,enchant:3832,gems:[40034,40015]},{id:39764,enchant:3850,gems:[0]},{id:40545,enchant:3860,gems:[40034,0]},{id:39759,enchant:3601,gems:[40008,36767]},{id:40589,enchant:3822},{id:39717,enchant:3232,gems:[40089]},{id:40370},{id:40718},{id:40257},{id:44063,gems:[36767,40089]},{id:40402,enchant:3788},{id:40400,enchant:3849},{id:41168,gems:[36767]}]},ie={items:[{id:46166,enchant:3818,gems:[41380,40008]},{id:45485,gems:[40008]},{id:46167,enchant:3852,gems:[40008]},{id:45496,enchant:3605,gems:[40023]},{id:46162,enchant:3832,gems:[40008,40008]},{id:45111,enchant:3850,gems:[0]},{id:45487,enchant:3860,gems:[40008,40008,0]},{id:45139,enchant:3601,gems:[40008]},{id:46169,enchant:3822,gems:[40088,40008]},{id:45988,enchant:3232,gems:[36767,36767]},{id:45471,gems:[45880]},{id:45247},{id:45158},{id:46021},{id:45442,enchant:3788,gems:[40034]},{id:45587,enchant:3849,gems:[36767]},{id:45137,enchant:3608}]},re={items:[{id:48433,enchant:3818,gems:[41380,40130]},{id:47133,gems:[40130]},{id:48455,enchant:3852,gems:[40119]},{id:47549,enchant:3605,gems:[40119]},{id:46968,enchant:3832,gems:[40130,49110,36767]},{id:47111,enchant:3850,gems:[40130,0]},{id:48453,enchant:3860,gems:[40167,0]},{id:47076,enchant:3599,gems:[40130,36767,36767]},{id:48447,enchant:3822,gems:[40130,40119]},{id:47003,enchant:3232,gems:[40130,40119]},{id:45471,gems:[40167]},{id:47157,gems:[40130]},{id:45158},{id:47088},{id:47506,enchant:3788,gems:[40167]},{id:46964,enchant:3849,gems:[40119]},{id:47660}]},oe={items:[{id:50640,enchant:3818,gems:[41380,40130]},{id:50682,gems:[40130]},{id:51224,enchant:3852,gems:[40130]},{id:50718,enchant:3605,gems:[40119]},{id:51220,enchant:3832,gems:[40130,40119]},{id:50611,enchant:3850,gems:[40119,0]},{id:51222,enchant:3860,gems:[40119,0]},{id:50691,enchant:3599,gems:[40130,36767,0]},{id:51223,enchant:3822,gems:[40167,40119]},{id:50625,enchant:3232,gems:[40167,40119]},{id:50622,gems:[40130]},{id:50642,gems:[40130]},{id:50364},{id:50344},{id:50738,enchant:3788,gems:[40119]},{id:50729,enchant:3849,gems:[40130]},{id:51834,gems:[36767]}]},le={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:47440}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{schedule:{schedule:"29s, 209s",innerAction:{castSpell:{spellId:{spellId:12975}}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{tag:1,spellId:47450}}}},{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:47488}}}},{action:{castSpell:{spellId:{spellId:57823}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Self"},auraId:{spellId:47440},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:47440}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:47502},maxOverlap:{const:{val:"2s"}}}},castSpell:{spellId:{spellId:47502}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:47437},maxOverlap:{const:{val:"2s"}}}},castSpell:{spellId:{spellId:25203}}}},{action:{castSpell:{spellId:{spellId:47498}}}}]},de=F("P1 PreRaid Preset",{items:[{id:42549,enchant:3818,gems:[41380,40015]},{id:40679},{id:37814,enchant:3852},{id:37728,enchant:3605},{id:39611,enchant:1953,gems:[40008,40008]},{id:37620,enchant:3850,gems:[0]},{id:39622,enchant:3860,gems:[40034,0]},{id:37379,enchant:3601,gems:[40034,36767]},{id:43500,enchant:3822,gems:[40034]},{id:44201,enchant:3232},{id:37784},{id:37186},{id:37220},{id:44063,gems:[36767,40089]},{id:37401,enchant:3788},{id:43085,enchant:3849},{id:41168,gems:[36767]}]}),ce=F("P4 PreRaid Preset",se),pe=F("P1 Preset",ne),me=F("P2 Preset",ie),he=F("P3 Preset",re),ge=F("P4 Preset",oe),Se=a.create({customRotation:s.create({spells:[n.create({spell:i.ShieldSlam}),n.create({spell:i.Revenge}),n.create({spell:i.Shout}),n.create({spell:i.ThunderClap}),n.create({spell:i.DemoralizingShout}),n.create({spell:i.MortalStrike}),n.create({spell:i.Devastate}),n.create({spell:i.SunderArmor}),n.create({spell:i.ConcussionBlow}),n.create({spell:i.Shockwave})]}),demoShoutChoice:r.DemoShoutChoiceNone,thunderClapChoice:o.ThunderClapChoiceNone,hsRageThreshold:30}),ue=N("Default APL",le),fe=J("Simple Cooldowns",l.SpecProtectionWarrior,Se),Ie={name:"Standard",data:d.create({talentsString:"2500030023-302-053351225000012521030113321",glyphs:c.create({major1:p.GlyphOfBlocking,major2:p.GlyphOfVigilance,major3:p.GlyphOfDevastate,minor1:m.GlyphOfCharge,minor2:m.GlyphOfThunderClap,minor3:m.GlyphOfCommand})})},Pe={name:"UA",data:d.create({talentsString:"35023301230051002020120002-2-05035122500000252",glyphs:c.create({major1:p.GlyphOfRevenge,major2:p.GlyphOfHeroicStrike,major3:p.GlyphOfSweepingStrikes,minor1:m.GlyphOfCharge,minor2:m.GlyphOfThunderClap,minor3:m.GlyphOfCommand})})},ve=h.create({shout:e.WarriorShoutCommanding,useShatteringThrow:!1,startingRage:0}),Oe=g.create({battleElixir:S.ElixirOfExpertise,guardianElixir:u.ElixirOfProtection,food:f.FoodDragonfinFilet,defaultPotion:I.IndestructiblePotion,prepopPotion:I.IndestructiblePotion,thermalSapper:!0,fillerExplosive:P.ExplosiveSaroniteBomb}),Re=U(l.SpecProtectionWarrior,{cssClass:"protection-warrior-sim-ui",cssScheme:"warrior",knownIssues:[],epStats:[v.StatStamina,v.StatStrength,v.StatAgility,v.StatAttackPower,v.StatExpertise,v.StatMeleeHit,v.StatMeleeCrit,v.StatMeleeHaste,v.StatArmor,v.StatBonusArmor,v.StatArmorPenetration,v.StatDefense,v.StatBlock,v.StatBlockValue,v.StatDodge,v.StatParry,v.StatResilience,v.StatNatureResistance,v.StatShadowResistance,v.StatFrostResistance],epPseudoStats:[O.PseudoStatMainHandDps],epReferenceStat:v.StatAttackPower,displayStats:[v.StatHealth,v.StatArmor,v.StatBonusArmor,v.StatStamina,v.StatStrength,v.StatAgility,v.StatAttackPower,v.StatExpertise,v.StatMeleeHit,v.StatMeleeCrit,v.StatMeleeHaste,v.StatArmorPenetration,v.StatDefense,v.StatBlock,v.StatBlockValue,v.StatDodge,v.StatParry,v.StatResilience,v.StatNatureResistance,v.StatShadowResistance,v.StatFrostResistance],defaults:{gear:he.gear,epWeights:R.fromMap({[v.StatArmor]:.174,[v.StatBonusArmor]:.155,[v.StatStamina]:2.336,[v.StatStrength]:1.555,[v.StatAgility]:2.771,[v.StatAttackPower]:.32,[v.StatExpertise]:1.44,[v.StatMeleeHit]:1.432,[v.StatMeleeCrit]:.925,[v.StatMeleeHaste]:.431,[v.StatArmorPenetration]:1.055,[v.StatBlock]:1.32,[v.StatBlockValue]:1.373,[v.StatDodge]:2.606,[v.StatParry]:2.649,[v.StatDefense]:3.305},{[O.PseudoStatMainHandDps]:6.081}),consumes:Oe,rotation:Se,talents:Ie.data,specOptions:ve,raidBuffs:y.create({giftOfTheWild:A.TristateEffectImproved,powerWordFortitude:A.TristateEffectImproved,abominationsMight:!0,swiftRetribution:!0,bloodlust:!0,strengthOfEarthTotem:A.TristateEffectImproved,leaderOfThePack:A.TristateEffectImproved,sanctifiedRetribution:!0,devotionAura:A.TristateEffectImproved,stoneskinTotem:A.TristateEffectImproved,icyTalons:!0,retributionAura:!0,thorns:A.TristateEffectImproved,shadowProtection:!0}),partyBuffs:k.create({}),individualBuffs:T.create({blessingOfKings:!0,blessingOfMight:A.TristateEffectImproved,blessingOfSanctuary:!0}),debuffs:w.create({sunderArmor:!0,mangle:!0,vindication:!0,faerieFire:A.TristateEffectImproved,insectSwarm:!0,bloodFrenzy:!0,judgementOfLight:!0,heartOfTheCrusader:!0,frostFever:A.TristateEffectImproved})},playerIconInputs:[te,ae],rotationInputs:{inputs:[]},includeBuffDebuffInputs:[V],excludeBuffDebuffInputs:[],otherInputs:{inputs:[L,_,q,z,K,Q,$,ee,X]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[Ie,Pe],rotations:[ue,fe],gear:[de,ce,pe,me,he,ge]},autoRotation:e=>ue.rotation.rotation,simpleRotation:(e,t,a)=>{let[s,n]=Z(a);const i=C.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":47440}}},"doAtValue":{"const":{"val":"-10s"}}}'),r=b.fromJsonString('{"condition":{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"30"}}}},"castSpell":{"spellId":{"tag":1,"spellId":47450}}}'),o=b.fromJsonString('{"castSpell":{"spellId":{"spellId":47488}}}'),l=b.fromJsonString('{"castSpell":{"spellId":{"spellId":57823}}}'),d=b.fromJsonString('{"condition":{"auraShouldRefresh":{"sourceUnit":{"type":"Self"},"auraId":{"spellId":47440},"maxOverlap":{"const":{"val":"3s"}}}},"castSpell":{"spellId":{"spellId":47440}}}'),c=b.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":47502},"maxOverlap":{"const":{"val":"2s"}}}},"castSpell":{"spellId":{"spellId":47502}}}'),p=b.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":47437},"maxOverlap":{"const":{"val":"2s"}}}},"castSpell":{"spellId":{"spellId":25203}}}'),m=b.fromJsonString('{"castSpell":{"spellId":{"spellId":47498}}}');return s.push(i),n.push(...[r,o,l,d,c,p,m].filter((e=>e))),E.create({prepullActions:s,priorityList:n.map((e=>x.create({action:e})))})},raidSimPresets:[{spec:l.SpecProtectionWarrior,tooltip:"Protection Warrior",defaultName:"Protection",iconUrl:B(D.ClassWarrior,2),talents:Ie.data,specOptions:ve,consumes:Oe,defaultFactionRaces:{[G.Unknown]:M.RaceUnknown,[G.Alliance]:M.RaceHuman,[G.Horde]:M.RaceOrc},defaultGear:{[G.Unknown]:{},[G.Alliance]:{1:pe.gear,2:me.gear,3:he.gear,4:ge.gear},[G.Horde]:{1:pe.gear,2:me.gear,3:he.gear,4:ge.gear}}}]});class ye extends Y{constructor(e,t){super(e,t,Re)}}export{ye as P};
//# sourceMappingURL=sim-ff52495b.chunk.js.map