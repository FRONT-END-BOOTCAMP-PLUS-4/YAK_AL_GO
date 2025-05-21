import { TextMatchTransformer } from '@lexical/markdown'

import {
  $createEquationNode,
  $isEquationNode,
  EquationNode,
} from '@/components/editor/nodes/equation-node'

export const EQUATION: TextMatchTransformer = {
  dependencies: [EquationNode],
  export: (node) => {
    if (!$isEquationNode(node)) {
      return null
    }

    return `$${node.getEquation()}$`
  },
  importRegExp: /\$([^$]+?)\$/,
  regExp: /\$([^$]+?)\$$/,
  replace: (textNode, match) => {
    const [, equation] = match
    const equationNode = $createEquationNode(equation, true)
    textNode.replace(equationNode)
  },
  trigger: '$',
  type: 'text-match',
}
