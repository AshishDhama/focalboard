import { IOrderedBlock } from "../octoTypes"
import { Block } from "./block"

class ImageBlock extends Block implements IOrderedBlock {
	get order(): number { return this.fields.order as number }
	set order(value: number) { this.fields.order = value }

	get url(): string { return this.fields.url as string }
	set url(value: string) { this.fields.url = value }

	constructor(block: any = {}) {
		super(block)
		this.type = "image"
	}
}

export { ImageBlock }