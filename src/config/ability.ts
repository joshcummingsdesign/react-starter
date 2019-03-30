import { AbilityBuilder } from '@casl/ability';

const ability = AbilityBuilder.define((can: Function) => {
  can(['edit'], 'Post');
});

export default ability;
