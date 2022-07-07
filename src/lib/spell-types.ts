declare namespace SpellType {
  interface Single {
    index: string;
    name: string;
    url: string;
  }

  interface List {
    count: number;
    results: Array<Single>;
  }

  interface Class {
    index: string;
    name: string;
    url: string;
  }

  interface SubClass {
    index: string;
    name: string;
    url: string;
  }

  interface DamageType {
    index: string;
    name: string;
    url: string;
  }

  interface Damage {
    damage_type: DamageType;
    damage_at_slot_level: object;
  }

  interface School {
    index: string;
    name: string;
    url: string;
  }

  interface Detail {
    _id: string;
    index: string;
    name: string;
    desc: Array<string>;
    higher_level: Array<string>;
    range: string;
    components: Array<string>;
    material: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type: string;
    damage: Damage;
    school: School;
    classes: Array<Class>;
    subclasses: Array<SubClass>;
    url: string;
  }
}

export default SpellType;
