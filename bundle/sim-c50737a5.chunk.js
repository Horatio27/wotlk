import{f2 as e,f3 as t,ea as a,P as n,h as s,f4 as i,f5 as d,E as r,cs as o,cn as m,cq as c,a2 as l,F as g,aG as f,bq as h,w as u,B as p,aH as S,K as P,S as O,g as y,u as b,aU as v,bF as I}from"./detailed_results-bc3a1d81.chunk.js";import{F as T,e as w,r as E,T as R,a2 as H,I as A}from"./preset_utils-40b1d43e.chunk.js";const F=T({fieldName:"aura",label:"Aura",values:[{name:"None",value:e.NoPaladinAura},{name:"Devotion Aura",value:e.DevotionAura},{name:"Retribution Aura",value:e.RetributionAura}]}),k=T({fieldName:"judgement",label:"Judgement",labelTooltip:"Judgement debuff you will use on the target during the encounter.",values:[{name:"None",value:t.NoJudgement},{name:"Wisdom",value:t.JudgementOfWisdom},{name:"Light",value:t.JudgementOfLight}]}),W={items:[{id:40298,enchant:3819,gems:[41401,40012]},{id:44662,gems:[40012]},{id:40573,enchant:3809,gems:[40012]},{id:44005,enchant:3831,gems:[40012]},{id:40569,enchant:3832,gems:[40012,40012]},{id:40332,enchant:1119,gems:[40012,0]},{id:40570,enchant:3604,gems:[40012,0]},{id:40259,gems:[40012]},{id:40572,enchant:3721,gems:[40027,40012]},{id:40592,enchant:3606},{id:40399},{id:40375},{id:44255},{id:37111},{id:40395,enchant:2666},{id:40401,enchant:1128},{id:40705}]},B={items:[{id:46180,enchant:3820,gems:[41401,40094]},{id:45443,gems:[40012]},{id:46182,enchant:3810,gems:[40012]},{id:45486,enchant:3831,gems:[40012]},{id:45445,enchant:3832,gems:[42148,42148,42148]},{id:45460,enchant:1119,gems:[40012,0]},{id:46179,enchant:3604,gems:[40047,0]},{id:45616,gems:[40012,40012,40012]},{id:46181,enchant:3721,gems:[40012,40012]},{id:45537,enchant:3606,gems:[40012,40012]},{id:45614,gems:[45882]},{id:45946,gems:[40012]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:45470,enchant:1128,gems:[40012]},{id:40705}]},j={items:[{id:46180,enchant:3820,gems:[41401,40123]},{id:47468,gems:[40123]},{id:46182,enchant:3810,gems:[40123]},{id:47551,enchant:3831,gems:[40123]},{id:47471,enchant:3832,gems:[42148,42148,42148]},{id:45460,enchant:1119,gems:[40123,0]},{id:46179,enchant:3604,gems:[40151,0]},{id:47997,gems:[40175,40123]},{id:46181,enchant:3721,gems:[40123,40123]},{id:47424,enchant:3606,gems:[40123,40123]},{id:47439,gems:[40123]},{id:45614,gems:[40123]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:47448,enchant:1128,gems:[40123]},{id:40705}]},G={items:[{id:51272,enchant:3820,gems:[41401,49110]},{id:51871,gems:[40123]},{id:51273,enchant:3810,gems:[40123]},{id:51826,enchant:3831,gems:[40123]},{id:50680,enchant:3832,gems:[42148,42148,42148]},{id:50687,enchant:1119,gems:[40123,0]},{id:50703,enchant:3604,gems:[40123,40123,0]},{id:51919,gems:[40123,40123,40123]},{id:49891,enchant:3721,gems:[40123,40123,40123]},{id:51920,enchant:3606,gems:[40123,40123]},{id:50610,gems:[40123]},{id:50400,gems:[40123]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:50616,enchant:1128,gems:[40123]},{id:40705}]},M=w("PreRaid",{items:[{id:44949,enchant:3819,gems:[41401,40012]},{id:42647,gems:[42702]},{id:37673,enchant:3809,gems:[40012]},{id:41609,enchant:3831},{id:39629,enchant:3832,gems:[40012,40012]},{id:37788,enchant:1119,gems:[0]},{id:39632,enchant:3604,gems:[40012,0]},{id:40691,gems:[40012,40012]},{id:37362,enchant:3721,gems:[40012,40012]},{id:44202,enchant:3606,gems:[40094]},{id:44283},{id:37694},{id:44255},{id:37111},{id:37169,enchant:2666},{id:40700,enchant:1128},{id:40705}]}),N=w("P1 Preset",W),C=w("P2 Preset",B),J=w("P3 Preset",j),L=w("P4 Preset",G),U={name:"Standard",data:a.create({talentsString:"50350151020013053100515221-50023131203",glyphs:{major1:n.GlyphOfHolyLight,major2:n.GlyphOfSealOfWisdom,major3:n.GlyphOfBeaconOfLight,minor2:s.GlyphOfLayOnHands,minor1:s.GlyphOfSenseUndead,minor3:s.GlyphOfBlessingOfKings}})},x=i.create({}),D=d.create({aura:e.DevotionAura,judgement:t.NoJudgement}),K=r.create({defaultPotion:o.RunicManaPotion,flask:m.FlaskOfTheFrostWyrm,food:c.FoodFishFeast}),q=E(O.SpecHolyPaladin,{cssClass:"holy-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[l.StatIntellect,l.StatSpirit,l.StatSpellPower,l.StatSpellCrit,l.StatSpellHaste,l.StatMP5],epReferenceStat:l.StatSpellPower,displayStats:[l.StatHealth,l.StatMana,l.StatStamina,l.StatIntellect,l.StatSpirit,l.StatSpellPower,l.StatSpellCrit,l.StatSpellHaste,l.StatMP5],defaults:{gear:N.gear,epWeights:g.fromMap({[l.StatIntellect]:.38,[l.StatSpirit]:.34,[l.StatSpellPower]:1,[l.StatSpellCrit]:.69,[l.StatSpellHaste]:.77,[l.StatMP5]:0}),consumes:K,rotation:x,talents:U.data,specOptions:D,raidBuffs:f.create({giftOfTheWild:h.TristateEffectImproved,powerWordFortitude:h.TristateEffectImproved,strengthOfEarthTotem:h.TristateEffectImproved,arcaneBrilliance:!0,unleashedRage:!0,leaderOfThePack:h.TristateEffectRegular,icyTalons:!0,totemOfWrath:!0,demonicPact:500,swiftRetribution:!0,moonkinAura:h.TristateEffectRegular,sanctifiedRetribution:!0,manaSpringTotem:h.TristateEffectRegular,bloodlust:!0,thorns:h.TristateEffectImproved,devotionAura:h.TristateEffectImproved,shadowProtection:!0}),partyBuffs:u.create({}),individualBuffs:p.create({blessingOfKings:!0,blessingOfSanctuary:!0,blessingOfWisdom:h.TristateEffectImproved,blessingOfMight:h.TristateEffectImproved}),debuffs:S.create({judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,faerieFire:h.TristateEffectImproved,ebonPlaguebringer:!0,totemOfWrath:!0,shadowMastery:!0,bloodFrenzy:!0,mangle:!0,exposeArmor:!0,sunderArmor:!0,vindication:!0,thunderClap:h.TristateEffectImproved,insectSwarm:!0})},playerIconInputs:[],rotationInputs:{inputs:[]},includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[R,H,F,k]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[U],rotations:[],gear:[M,N,C,J,L]},autoRotation:e=>P.create(),raidSimPresets:[{spec:O.SpecHolyPaladin,tooltip:"Holy Paladin",defaultName:"Holy",iconUrl:y(b.ClassPaladin,0),talents:U.data,specOptions:D,consumes:K,defaultFactionRaces:{[v.Unknown]:I.RaceUnknown,[v.Alliance]:I.RaceHuman,[v.Horde]:I.RaceBloodElf},defaultGear:{[v.Unknown]:{},[v.Alliance]:{1:N.gear,2:C.gear,3:J.gear,4:L.gear},[v.Horde]:{1:N.gear,2:C.gear,3:J.gear,4:L.gear}}}]});class _ extends A{constructor(e,t){super(e,t,q)}}export{_ as H};
//# sourceMappingURL=sim-c50737a5.chunk.js.map
