import { Controller, HttpResponse } from '@/presentation/protocols'
import { DeleteById } from '@/domain/usecases'
import { badRequest } from '../helpers'

export class DeleteAccountController implements Controller {
  constructor (
    private readonly deleteById: DeleteById
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    const error = await this.deleteById.delete(request.id)
    if (error) {
      return badRequest(error)
    }
    return null
  }
}
