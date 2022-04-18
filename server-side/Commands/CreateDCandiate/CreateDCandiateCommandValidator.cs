using FluentValidation;
using System;

namespace WebApi.Commands.CreateDCandiate
{
    public class CreateDCandiateCommandValidator : AbstractValidator<CreateDCandiateCommand>
    {
        public CreateDCandiateCommandValidator()
        {

            RuleFor(x => x.Candiate.FullName)
               .NotEmpty()
               .MaximumLength(15)
               .WithMessage("Name Maximum length is 25 character ");

            RuleFor(x => x.Candiate.Email)
                .EmailAddress()
                .NotNull()
                .NotEmpty();

            RuleFor(x => x.Candiate.Address)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Candiate.Mobile)
                .NotNull()
                .NotEmpty()
                .WithMessage("Mobile is Required")
                .MinimumLength(11)
                .WithMessage("Mobile Number must be 11 numbers ")
                .MaximumLength(11)
                .WithMessage("Mobile Number must be 11 numbers ")
                 .Must((x) =>
                 {
                     int mobile;
                     if (Int32.TryParse(x, out mobile))
                     {
                         if (x.Length > 0)
                         {
                             return true;
                         }
                         else
                         {
                             return false;
                         }

                     }
                     else
                     {
                         return false;

                     }




                 })
                 .WithMessage("Invalid Mobile number");

            RuleFor(x => x.Candiate.Age)
                .NotEmpty()
                .MinimumLength(1)
                .WithMessage("age is invalid")
                .Must((x) =>
                {
                    int age;
                    if (Int32.TryParse(x, out age))
                    {
                        if (x.Length > 0)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }

                    }
                    else
                    {
                        return false;

                    }




                })
                 .WithMessage("Invalid age");
        }
    }
}
