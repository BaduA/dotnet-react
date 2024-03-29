using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ActivitiesController : BasApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            return HandleResul(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id)
        {
            return HandleResul(await Mediator.Send(new Details.Query { Id = id }));
        }
        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return HandleResul(await Mediator.Send(new Create.Command { Activity = activity }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResul(await Mediator.Send(new Edit.Command { Activity = activity }));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResul(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}